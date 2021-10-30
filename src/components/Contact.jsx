import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import styled, { css } from 'styled-components'

function Contact() {
    return (
        <ContactContainer id="contact">
            <h2 style={{ "textAlign": "center", "marginTop": "1rem" }}>Contact Me</h2>
            <Row className="justify-content-center">
                {/* <HeroButton primary="true">Form</HeroButton> */}
                <HeroButton primary="true" href={"mailto:vikrantreddy@hotmail.com"}>Email</HeroButton>
            </Row>
        </ContactContainer >
    )
}

export default Contact

const ContactContainer = styled(Container)`
    background-color:#083754;
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
  border: 2px solid #1e6b96;
  color: #1e6b96;
  margin: 1em;
  padding: 0.25em 1.5em;

  ${props => props.primary && css`
    background: #1e6b96;
    color: #f2f2f2;
  `}
`;
