import React, {useEffect} from 'react';
import './banner.scss';

import Pattern from '../../Path.svg';
import TweetBanner from '../../tweet-search.png';
// import PromoVideo from '../../promo.mp4';
import Search from '../Search/Search';

function Banner() {
    return (
        <div className="banner align-items-center d-flex">
            <div className="container">
                <div className="row align-items-center banner-row">
                    <div class="col-6">
                        <h1 class="display-4 text-light">Search tweets like a James Bond!</h1>
                    </div>
                    <div className="col-5 video-block">
                        <div className="video-holder">
                            {/* <video width="320" height="240" controls="false" autoplay="autoplay" muted loop>
                                <source src={PromoVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>  */}
                            <img src={TweetBanner} alt="" />
                        </div>
                    </div>
                </div>
                <Search />
            </div>
            <div className="pattern"><img src={Pattern} alt="" /></div>
        </div>
    )
}

export default Banner
