import React from "react";
import TweetFeeds from "./TweetFeeds";

function Tweet() {
  return (
    <section className="twitter-section">
      <div className="container">
        <div className="row">
          <TweetFeeds tweet="tweet"/>
          <TweetFeeds />
          <TweetFeeds />
          <TweetFeeds />
          <TweetFeeds />
        </div>
      </div>
    </section>
  );
}

export default Tweet;
