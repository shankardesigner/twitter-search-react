import React from "react";
import './search.scss';

function Search({searchTweet}) {

  return (
    <div className="search-block">
      <div className="row mt-4">
        <div className="col">
          <div className="card card-body">
            <form className="row">
              <div className="col">
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Search Tweets use space after every keyword"
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
