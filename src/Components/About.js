import React, { useEffect } from 'react'
import ReactPixel from 'react-facebook-pixel/src/index';

const About = () => {
    useEffect(() => {
        ReactPixel.pageView(window.location.pathname + window.location.search);
    }, [])

    return (
        <div>
            <h1>About Page</h1>
            <button type='button' onClick={() => ReactPixel.trackCustom("About Btn", "Btn Clicked")}>Click about</button>
        </div>
    )
}

export default About
