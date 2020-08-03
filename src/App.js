import React, { useEffect, useReducer, useState } from 'react';
import './app.scss';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Header/Header'
import { getAllTweets } from './actions/tweetActions';
import { tweetReducer, twitterInitialState } from './reducers/tweetReducer';
import Home from './Home/Home';
import AppContext from './utils/AppContext';
import { chekTokenExpire } from './Account/checkTokenExpire';
import Login from './Account/Login';
import Register from './Account/Register';
import { removeRequestHeader } from './Account/setAxiosHeader';

function App() {
  const [state, dispatch] = useReducer(tweetReducer, twitterInitialState);
  const [appToken, setAppToken] = useState(localStorage.getItem('app-token'));
  let isAuth;

  if(appToken !== null && chekTokenExpire(appToken) != undefined) {
    isAuth = true;
  } else {
    removeRequestHeader();
  }

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    getAllTweets(dispatch, source);

    return () => {
      source.cancel();
    };
  }, []);

  const searchTweet = (event) => {
    const searchTerms = event.target.value;

    if(!isAuth) {
      alert("please login to search");
      return;
    }

    if (/^ *$/.test(searchTerms)) {
      searchTerms.replace(" ", ", %23");
    }

  
    let input = document.getElementById('search-input');
    let timeout = null;

    input.addEventListener('keyup', function (e) {
        clearTimeout(timeout);

        timeout = setTimeout(function () {
          getAllTweets(dispatch, '', searchTerms);
        }, 1000);
    });

  }

  return (
    <Router>
      <AppContext.Provider value={appToken}>
      <Header isAuth={isAuth}/>
        <Switch>
          <Route exact path="/"><Home searchTweet={searchTweet} tweets={state}/></Route>
          <Route exact path="/login"><Login isAuth={isAuth} setAppToken={setAppToken}/></Route>
          <Route exact path="/register"><Register isAuth={isAuth}/></Route>
        </Switch>
        </AppContext.Provider>
    </Router>
  )
}

export default App
