import React, { useEffect, useRef, useState } from 'react'
import Typed from "typed.js";

const Herotext = ({ text }) => {
    useEffect(() => {

        // Options for the Typed object
        const options = {
            strings: [text],
            typeSpeed: 50,
            startDelay: 200,
            backDelay: 100,
        };

        // New Typed instance
        const typed = new Typed('#instruction', options);

        // Destroy Typed instance on unmounting the component to prevent memory leaks
        return () => {
            typed.destroy();
        };
    }, [text]);

    return (
        <section style={{
            fontSize: "2.5em"
        }}>
            <div id='instruction' style={{
                display: "inline"
            }}></div>
        </section >
    );
};


export default Herotext
