import React, {useEffect} from 'react';
import './banner.scss';

import Pattern from '../../Path.svg';
import TweetBanner from '../../tweet-search.png';
// import PromoVideo from '../../promo.mp4';
import Search from '../Search/Search';
import AppContext from '../utils/AppContext';
import { chekTokenExpire } from '../Account/checkTokenExpire';

function Banner({searchTweet}) {
    const context = AppContext;
    const contextToken = context._currentValue;
    const usernameAfterValidation = contextToken ? chekTokenExpire(contextToken) : 'Viewers';

    return (
        <div className="banner align-items-center d-flex">
            <div className="container">
                <div className="row align-items-center banner-row">
                    <div className="col-6">
                     <h1 className="display-6 text-light">Hello {usernameAfterValidation} ! <p className="desc-text">🔍 Search tweets like a James Bond!</p></h1>
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
                <Search searchTweet={searchTweet}/>
            </div>
            <div className="pattern"><img src={Pattern} alt="" /></div>
        </div>
    )
}

export default Banner
