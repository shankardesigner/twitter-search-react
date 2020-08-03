import React from 'react'
import Banner from '../Banner/Banner'
import Tweet from '../Tweet/Tweet'

function Home({searchTweet,tweets}) {
    return (
        <>
            <Banner searchTweet={searchTweet}/>
            <Tweet tweets={tweets}/>
        </>
    )
}

export default Home
