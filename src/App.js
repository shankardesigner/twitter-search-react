import React, { useEffect, useReducer } from 'react';
import './app.scss';

import Header from './Header/Header'
import Banner from './Banner/Banner'
import Tweet from './Tweet/Tweet';
import { getAllTweets } from './actions/tweetActions';
import { tweetReducer, twitterInitialState } from './reducers/tweetReducer';

function App() {
  const [state, dispatch] = useReducer(tweetReducer, twitterInitialState);

  useEffect(() => {
    const getTweets =  async () => {
      return await getAllTweets(dispatch);
    };

    getTweets();
    // console.log(state);
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Tweet />
    </>
  )
}

export default App
