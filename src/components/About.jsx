import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import ReactCardFlip from 'react-card-flip';
function About() {

    const [isFlipped1, flip1] = useState(false)
    const [isFlipped2, flip2] = useState(false)

    function handleClick1(e) {
        e.preventDefault();
        flip1(!isFlipped1)
    }

    function handleClick2(e) {
        e.preventDefault();
        flip2(!isFlipped2)
    }

    return (
        <AboutContainer>
            <h2 style={{ "textAlign": "center" }}>About Me</h2>
            <Row style={{ "margin": "10% 0" }}>
                <Col>
                    <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
                        <AboutRow onClick={handleClick1}>
                            <Col>
                                Personal.
                            </Col>
                        </AboutRow>

                        <AboutRow onClick={handleClick1}>
                            This is the back of the card.
                        </AboutRow>
                    </ReactCardFlip>
                </Col>

                <Col>
                    <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
                        <AboutRow onClick={handleClick2}>
                            Professional.
                        </AboutRow>

                        <AboutRow onClick={handleClick2}>
                            This is the back of the card.
                        </AboutRow>
                    </ReactCardFlip>
                </Col>
            </Row>
        </AboutContainer >
    )
}

export default About

const AboutContainer = styled(Container)`
    background-color:#272C2C;
    color:#f2f2f2;
    font-family: 'Open Sans', sans-serif;
    padding:5%;
    margin:2%;
    max-width: 96%;
`
const AboutText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: larger;
    text-align: center;
`
const AboutRow = styled(Col)`
    border: 1px solid;
    padding: 1rem;
    margin: 0 2vw;
    max-width:80%
`