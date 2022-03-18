import React, { useEffect } from 'react'
import ReactPixel from 'react-facebook-pixel/src/index';

const Home = () => {
    useEffect(() => {
        ReactPixel.pageView(window.location.pathname + window.location.search);
    }, [])

    return (
        <div>
            <h1>Home Page</h1>
            <button type='button' onClick={() => ReactPixel.trackCustom("Home Btn", "Btn Clicked")}>Click Home</button>
        </div>
    )
}

export default Home
