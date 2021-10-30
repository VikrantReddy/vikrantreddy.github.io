import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import { ReactComponent as Herosvg } from "../assets/svgs/herosvg.svg";
import Herotext from "./Herotext.jsx";

function Hero() {
    const [herotext, setHerotext] = useState(0);
    let textlist = ["Vikrant codes less, refactors more", "He works as a full-time freelancer and a part-time tutor", "He squashes bugs and saves time", "HTML is a programming language.\nYou should totally hire him.", "Let his work speak for him \n👇"]
    let buttonlist = ["Tell me more", "Neat!", "1 truth 1 lie", "See why"]
    return (
        <HeroContainer id="home">
            <Row>
                <Col style={{ 'marginTop': "10%" }} xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} >
                    {<Herotext text={textlist[herotext]} />}
                    <Row style={{ 'marginTop': "5vh" }}>
                        {herotext < textlist.length - 1 &&
                            <HeroButton primary="true" onClick={() => { setHerotext((herotext + 1) % textlist.length); }}>{buttonlist[herotext]}</HeroButton>
                        }
                        <HeroButton>Show Work</HeroButton>
                    </Row>
                </Col>
                <Col xs={{ span: 10, order: 1, offset: 1 }} md={{ span: 5, order: 2 }} style={{ marginTop: "1.5rem" }}>
                    <HeroSvg />
                </Col>
            </Row>
        </HeroContainer >
    )
}

export default Hero

const HeroContainer = styled(Container)`
    background-color:#1e6b96;
    color:#f2f2f2;
    font-family: 'Open Sans', sans-serif;
    padding:5%;
    margin-top: 6%; 
    max-width: 96%;
    min-height: 64vh;
    position:relative;
`
const HeroButton = styled(Button)`
  background: transparent;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  border: 2px solid #184764;
  color: #184764;
  margin: 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: #184764;
    color: #f2f2f2;
  `}
`;

const HeroSvg = styled(Herosvg)`
    height:inherit;
    width:inherit;
    padding:10%;
    padding-top:15%;
`
