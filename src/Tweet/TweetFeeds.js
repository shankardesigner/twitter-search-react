import React from "react";
import './tweet.scss';

function TweetFeeds({ tweet }) {
  return (
    <div className="col-4">
      <div className="twitter-holder">
        <div className="image-holder"></div>
        <div className="desc-block">
          <div className="info-meta"></div>
          <p>text</p>
          if # here
        </div>
        <ul className="retweetFeeds-status">
          <li>fav</li>
          <li>Like</li>
        </ul>
      </div>
    </div>
  );
}

export default TweetFeeds;
