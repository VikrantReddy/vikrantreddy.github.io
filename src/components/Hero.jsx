import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import { ReactComponent as Herosvg } from "../assets/svgs/herosvg.svg";
import { ReactComponent as Logosvg } from "../assets/svgs/logo.svg";
import Herotext from "./Herotext.jsx";

function Hero() {
    const [herotext, setHerotext] = useState(0);
    return (
        <HeroContainer>
            <Row>
                <Col>
                    {/* <img src={"heroicon.png"} height={90} style={{ "margin": -30 }} /> */}
                    <Logosvg height={90} style={{ "margin": -45 }} />
                </Col>

                <Col style={{ 'textAlign': "right" }}>
                    Now Playing
                </Col>
            </Row>
            <Row>
                <Col style={{ 'marginTop': "10vh" }} xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} >
                    {<Herotext text={["anc", "bvs"][herotext]} />}
                </Col>
                <Col xs={{ span: 10, order: 1, offset: 1 }} md={{ span: 5, order: 2 }}>
                    <HeroSvg />
                </Col>
            </Row>
            <Row>
                <HeroButton primary="true" onClick={() => { setHerotext(herotext + 1); }}>Know More</HeroButton>
                <HeroButton>Show Work</HeroButton>
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
  border: 2px solid #474C4C;
  color: #474C4C;
  margin: 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: #474C4C;
    color: #f2f2f2;
  `}
`;

const HeroSvg = styled(Herosvg)`
    height:inherit;
    width:inherit;
    padding:10%;
    padding-top:15%;
`
