import React, { useEffect } from 'react'
import ReactPixel from 'react-facebook-pixel/src/index';

const Contact = () => {
    useEffect(() => {
        ReactPixel.pageView(window.location.pathname + window.location.search);
    }, [])

    const handleBtn1 = () => {
        ReactPixel.trackCustom("Contact 1 Btn", "Btn Clicked")
    }

    const handleBtn2 = () => {
        ReactPixel.trackCustom("Contact 2 Btn", "Btn Clicked")
    }

    return (
        <div>
            <h1>Contact Page</h1>
            <button type='button' onClick={handleBtn1}>Click Contact</button>
            <button type='button/' onClick={handleBtn2}> Click Contact 1 </button>
        </div>
    )
}

export default Contact
