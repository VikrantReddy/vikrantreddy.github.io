import React, { useEffect, useRef, useState } from 'react'
import Typed from "typed.js";

function Herotext() {

    const el = useRef(null);
    const [heroText, setHerotext] = useState("I am Vikrant Reddy");


    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [heroText], // Strings to display
            startDelay: 200,
            typeSpeed: 80,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: false,
            showCursor: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <h2 ref={el} style={{
            display: "inline",
            fontSize: 30
        }}></h2>
    )
}

export default Herotext
