import React from "react";
import TweetFeeds from "./TweetFeeds";
import Spinner from "../Spinner/Spinner";

function Tweet({tweets}) {
  const avilabelTweets = tweets.tweets.map((tweet, idx) => <TweetFeeds key={idx} description={tweet} />);
  return (
    <section className="twitter-section">
      <div className="container">
        <div className="row">
          {tweets.loading ? <Spinner /> :avilabelTweets}
        </div>
      </div>
    </section>
  );
}

export default Tweet;
