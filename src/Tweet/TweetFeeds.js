import React from "react";
import "./tweet.scss";

function TweetFeeds({ description }) {
  return (
    <div className="col-4">
      <div className="twitter-holder">
        <div className="image-holder">
          <img src={description.profile_image_url} alt="" />
        </div>
        <div className="desc-block">
          <div className="info-meta">{description.screen_name}</div>
          <p>{description.tweetText}</p>
        </div>
        {/* <ul className="retweetFeeds-status">
          <li>{description.retweeted_status != null ? description.retweeted_status.favorite_count : 0}</li>
          <li>{description.retweeted_status != null ? description.retweeted_status.retweet_count : 0}</li>
        </ul> */}
      </div>
    </div>
  );
}

export default TweetFeeds;
