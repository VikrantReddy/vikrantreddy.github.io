import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import { ReactComponent as Herosvg } from "../assets/svgs/herosvg.svg";
function Hero() {
    return (
        <HeroContainer>
            <Row>
                <Col>
                    <h4>Vikrant Reddy</h4>
                </Col>
                <Col style={{ 'text-align': "right" }}>
                    Now playing
                </Col>
            </Row>
            <Row>
                <Col style={{ 'margin-top': "15vh" }}>
                    <h2>
                        Hey there!
                        I'm Vikrant
                    </h2>
                </Col>
                <Col md={6}>
                    <HeroSvg />
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
    color:whitesmoke;
    font-family: 'Open Sans', sans-serif;
    padding:5%;
    margin:2%;
    max-width: 96%;
    height:80vh;
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
    color: white;
  `}
`;

const HeroSvg = styled(Herosvg)`
    height:inherit;
    width:inherit;
`
