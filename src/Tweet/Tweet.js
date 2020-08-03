import React from "react";
import TweetFeeds from "./TweetFeeds";

function Tweet({tweets}) {
  const avilabelTweets = tweets.tweets.map((tweet, idx) => <TweetFeeds key={idx} description={tweet} />);
  return (
    <section className="twitter-section">
      <div className="container">
        <div className="row">
          {avilabelTweets}
        </div>
      </div>
    </section>
  );
}

export default Tweet;
