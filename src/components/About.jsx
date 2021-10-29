import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

function About() {
    return (
        <AboutContainer>
            <h2 style={{ "textAlign": "center" }}>About Me</h2>
            <Row style={{ "margin": "10% 0" }}>
                <Col md={{ span: 3, offset: 1 }}>
                    <AboutText>
                        One day, I figured out that I could make my pc do my work
                    </AboutText>
                </Col>

                <Col md={{ span: 3, offset: 4 }}>
                    <AboutText>
                        And ever since, my life hasn't been the same
                    </AboutText>
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