import React, { useEffect, useReducer } from 'react';
import './app.scss';
import axios from "axios";

import Header from './Header/Header'
import Banner from './Banner/Banner'
import Tweet from './Tweet/Tweet';
import { getAllTweets } from './actions/tweetActions';
import { tweetReducer, twitterInitialState } from './reducers/tweetReducer';
import Login from './Account/Login';
import Register from './Account/Register';

function App() {
  const [state, dispatch] = useReducer(tweetReducer, twitterInitialState);

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
    setTimeout(() => {
      console.log(searchTerms);
    }, 5000);
  }

  return (
    <>
      <Header />
      {/* <Banner searchTweet={searchTweet}/>
      <Tweet tweets={state}/> */}
      {/* <Login /> */}
      <Register />
    </>
  )
}

export default App
