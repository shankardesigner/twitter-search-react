import React from "react";
import './search.scss';

function Search() {
  return (
    <div className="search-block">
      <div class="row mt-4">
        <div class="col">
          <div class="card card-body">
            <form class="row">
              <div class="col-3">
                <div class="form-group">
                  <select class="custom-select">
                    <option selected="">Location</option>
                    <option value="1">Castle Hill</option>
                    <option value="2">Kensington</option>
                    <option value="3">Hawthorn</option>
                  </select>
                </div>
              </div>
              <div class="col-lg">
                <div class="form-group">
                  <input
                    class="form-control form-control-lg"
                    placeholder="Search Tweets"
                    type="text"
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
