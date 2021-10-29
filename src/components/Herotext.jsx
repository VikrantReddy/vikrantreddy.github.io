import React, { useEffect, useRef, useState } from 'react'
import Typed from "typed.js";

const Herotext = ({ text }) => {
    useEffect(() => {

        const options = {
            strings: [text],
            typeSpeed: 50,
            startDelay: 200,
            backDelay: 100,
        };


        const typed = new Typed('#instruction', options);

        return () => {
            typed.destroy();
        };
    }, [text]);

    return (
        <section style={{
            fontSize: "3em", fontWeight: "bold"
        }}>
            <div id='instruction' style={{
                display: "inline",
                "white-space": "pre-line"
            }}></div>
        </section >
    );
};


export default Herotext
