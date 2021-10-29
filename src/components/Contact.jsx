import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import styled, { css } from 'styled-components'

function Contact() {
    return (
        <ContactContainer>
            <h2 style={{ "textAlign": "center" }}>Contact Me</h2>
            <Row className="justify-content-center">
                <HeroButton primary="true">Form</HeroButton>
                <HeroButton>Email</HeroButton>
            </Row>
        </ContactContainer >
    )
}

export default Contact

const ContactContainer = styled(Container)`
    background-color:#474C4C;
    color:#f2f2f2;
    font-family: 'Open Sans', sans-serif;
    padding:5%;
    margin:2%;
    max-width: 96%;
`
const HeroButton = styled(Button)`
  background: transparent;
  font-size:larger;
  border-radius: 3px;
  font-family: "Montserrat", sans-serif;
  border: 2px solid #5692EB;
  color: #5692EB;
  margin: 1em;
  padding: 0.25em 1.5em;

  ${props => props.primary && css`
    background: #5692EB;
    color: #f2f2f2;
  `}
`;
