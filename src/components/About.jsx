import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import ReactCardFlip from 'react-card-flip';
function About() {

    const [isFlipped1, flip1] = useState(false)
    const [isFlipped2, flip2] = useState(false)

    function handleClick1(e) {
        console.log(isFlipped1, isFlipped2)
        e.preventDefault();
        flip1(!isFlipped1)
    }

    function handleClick2(e) {
        e.preventDefault();
        flip2(!isFlipped2)
    }

    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })


    return (
        <AboutContainer>
            <h2 style={{ "textAlign": "center", "marginTop": "1rem" }}>About Me</h2>
            <Row style={{ "margin": "10% 0" }}>
                <Col xs={12} md={6}>
                    <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
                        <AboutCard onClick={(evt) => { if (isMobile) { handleClick1(evt) } }} onMouseEnter={(evt) => { if (!isMobile) { handleClick1(evt) } }}>
                            Personal.
                        </AboutCard >

                        <AboutCard onClick={(evt) => { if (isMobile) { handleClick1(evt) } }} onMouseLeave={(evt) => { if (!isMobile) { handleClick1(evt) } }}>
                            ✔️Watches Anime <br />
                            ✔️Cooks great food <br />
                            ✔️Plays sports and video games <br />
                            ✔️Sucker for new experiences <br />
                            ❌Can't forgive spoilers <br />
                            ❌Not sleeping before 2am
                        </AboutCard >
                    </ReactCardFlip>
                </Col>

                <Col xs={12} md={6}>
                    <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
                        <AboutCard onClick={(evt) => { if (isMobile) { handleClick2(evt) } }} onMouseEnter={(evt) => { if (!isMobile) { handleClick2(evt) } }}>
                            Professional.
                        </AboutCard >

                        <AboutCard onClick={(evt) => { if (isMobile) { handleClick2(evt) } }} onMouseLeave={(evt) => { if (!isMobile) { handleClick2(evt) } }}>
                            ✔️Automates Everything <br />
                            ✔️Dark theme <br />
                            ✔️Is probably coding even now <br />
                            ✔️Fascinated by design <br />
                            ❌Can't not refactor code<br />
                            ❌Never taking spaces over tabs
                        </AboutCard >
                    </ReactCardFlip>
                </Col>
            </Row>
        </AboutContainer >
    )
}

export default About

const AboutContainer = styled(Container)`
    background-color:#083754;
    color:#f2f2f2;
    font-family: 'Open Sans', sans-serif;
    padding:5%;
    margin:2%;
    max-width: 96%;
    min-height: 60vh;
`

const AboutCard = styled.div`
    border: 1px solid;
    padding: 1rem;
    margin: 2vh 2vw;
    width:80%
`