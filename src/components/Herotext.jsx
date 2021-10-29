import React, { useEffect, useRef, useState } from 'react'
import Typed from "typed.js";

function Herotext() {

    const el = useRef(null);
    const [heroText, setHerotext] = useState("I am Vikrant Reddy");


    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [heroText, "newtext"], // Strings to display
            isDefaultString: true,
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
        <div style={{ fontSize: "2.5em" }}>
            <p ref={el} style={{
                display: "inline",
            }}></p>
            <button onPress={() => { setHerotext("New text") }}></button>
        </div>
    )
}

export default Herotext
