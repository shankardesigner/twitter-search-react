import React from 'react'
import Banner from '../Banner/Banner'
import Tweet from '../Tweet/Tweet'

function Home({searchTweet,tweets}) {
    console.log(tweets)
    return (
        <>
            <Banner searchTweet={searchTweet}/>
            <Tweet tweets={tweets}/>
        </>
    )
}

export default Home
