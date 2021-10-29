import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import { ReactComponent as Herosvg } from "../assets/svgs/herosvg.svg";
import Herotext from "./Herotext.jsx";

function Hero() {
    const [herotext, setHerotext] = useState(0);
    let textlist = ["Vikrant is a developer", "He works as a full-time freelancer and a part-time tutor", "He saves time and squashes bugs", "HTML is a programming language.\nYou should totally hire him", "Let his work speak for him \n👇"]
    let buttonlist = ["Tell me more", "Neat!", "1 truth 1 lie", "See why"]
    return (
        <HeroContainer>
            <Row>
                <Col>
                    {/* <img src={"heroicon.png"} height={90} style={{ "margin": -30 }} /> */}

                </Col>

                <Col style={{ 'textAlign': "right" }}>
                    Now Playing
                </Col>
            </Row>
            <Row>
                <Col style={{ 'marginTop': "25vh" }} xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} >
                    {<Herotext text={textlist[herotext]} />}
                    <Row style={{ 'marginTop': "5vh" }}>
                        {herotext < textlist.length - 1 &&
                            <HeroButton primary="true" onClick={() => { setHerotext((herotext + 1) % textlist.length); }}>{buttonlist[herotext]}</HeroButton>
                        }
                        <HeroButton>Show Work</HeroButton>
                    </Row>
                </Col>
                <Col xs={{ span: 10, order: 1, offset: 1 }} md={{ span: 5, order: 2 }}>
                    <HeroSvg />
                </Col>
            </Row>
        </HeroContainer >
    )
}

export default Hero

const HeroContainer = styled(Container)`
    background-color:#1642DB;
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
  border: 2px solid #272C2C;
  color: #272C2C;
  margin: 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: #272C2C;
    color: #f2f2f2;
  `}
`;

const HeroSvg = styled(Herosvg)`
    height:inherit;
    width:inherit;
    padding:10%;
    padding-top:15%;
`
