import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import { ReactComponent as Herosvg } from "../assets/svgs/herosvg.svg";
import Typed from "typed.js";

function Hero() {
    const el = useRef(null);
    const [heroText, setHerotext] = useState("I am Vikrant");


    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [heroText], // Strings to display
            startDelay: 200,
            typeSpeed: 80,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: false,
            showCursor: false,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <HeroContainer>
            <Row>
                <Col>
                    <h4>Vikrant Reddy</h4>
                </Col>
                <Col style={{ 'text-align': "right" }}>
                    Now Playing
                </Col>
            </Row>
            <Row>
                <Col style={{ 'margin-top': "15vh" }}>
                    <h2 ref={el}></h2>
                </Col>
                <Col md={5}>
                    <HeroSvg />
                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <HeroButton>Know More</HeroButton>
                <HeroButton primary>Show Work</HeroButton>
            </Row>
        </HeroContainer >
    )
}

export default Hero

const HeroContainer = styled(Container)`
    background-color:#5692EB;
    color:#f2f2f2;
    font-family: 'Open Sans', sans-serif;
    padding:5%;
    margin:2%;
    max-width: 96%;
`
const HeroButton = styled(Button)`
  background: transparent;
  border-radius: 3px;
  font-family: "Montserrat", sans-serif;
  border: 2px solid #3F3D56;
  color: #3F3D56;
  margin: 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: #3F3D56;
    color: #f2f2f2;
  `}
`;

const HeroSvg = styled(Herosvg)`
    height:inherit;
    width:inherit;
    padding:10%;
    padding-top:15%;
`
