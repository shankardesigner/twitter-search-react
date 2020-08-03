import React from "react";
import './search.scss';

function Search({searchTweet}) {

  return (
    <div className="search-block">
      <div classn="row mt-4">
        <div classn="col">
          <div classn="card card-body">
            <form classn="row">
              <div classn="col-3">
                <div classn="form-group">
                  <select classn="custom-select">
                    <option>Location</option>
                    <option value="1">Castle Hill</option>
                    <option value="2">Kensington</option>
                    <option value="3">Hawthorn</option>
                  </select>
                </div>
              </div>
              <div classn="col-lg">
                <div classn="form-group">
                  <input
                    classn="form-control form-control-lg"
                    placeholder="Search Tweets"
                    type="text"
                    onChange={(e) => searchTweet(e)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
