import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Workitem from './WorkItem.jsx'
import github from '../assets/github.png';

function Work() {
    let data = [
        {
            "title": "OCR Pipeline",
            "subtitle": "Python",
            "description": "A pipeline of scripts to scrape, screenshot and convert tables into sheets and further test their websites for legible leads"
        },
        {
            "title": "Automated Dropshipping",
            "subtitle": "Python",
            "description": "Plug and play scripts to scrape ecom websites with a CMS like shopify or squarespace to create your own dropshipping business"
        },
        {
            "title": "Synchronized Player",
            "subtitle": "Javascript",
            "description": "A chrome extension that lets you watch your favorite tv shows and movies with your friends on any video platform"
        },
        {
            "title": "Advanced Text Snipper",
            "subtitle": "Python",
            "description": "Windows native snipper with additional character recognition features from the core to copy text from images on the go"
        },
        {
            "title": "Parking finder",
            "subtitle": "React Native & C#",
            "description": "A programmed ESP8266 with a web socket server hosted on cloud to help users navigate to the closest vaccant parking spot"
        },
        {
            "title": "Excel to Database",
            "subtitle": "Python & Google Sheets",
            "description": "A database with CRUD operations on a cloud hosted google sheets speadsheet for MVP testing and showcasing purposes"
        },
        {
            "title": "Amazon Watcher",
            "subtitle": "Python",
            "description": "Scrapes selected amazon products periodically and notifies user via E-mail when the item under watch is on a discont"
        },
        {
            "title": "Mobile Mouse",
            "subtitle": "React Native & Python",
            "description": "An app that lets users use their phone by sensing the accelerometer to scroll through long web comics"
        },
        {
            "title": "Command Line Newspaper",
            "subtitle": "Python",
            "description": "A CLI app that brings news, job classifides, crosswords and many more to the comfort of your terminal "
        }
    ]
    return (
        <WorkContainer id="work">
            <h2 style={{ "textAlign": "center", "marginBottom": "10vh", "marginTop": "1rem", "color": "white" }}>My Works</h2>
            <Row>
                {
                    data.map(
                        (item, index) => {
                            return (
                                <Workitem title={item.title} stack={item.subtitle} description={item.description} />
                            )
                        }
                    )
                }

            </Row>
            <Row style={{ justifyContent: 'center', marginTop: "1rem" }}>
                <a href="https://www.github.com/VikrantReddy">
                    <img src={github} style={{ display: "inline" }} alt="github" height={25} />
                    <h4 style={{ marginLeft: "0.5rem", float: "right", color: "#f2f2f2" }}>@VikrantReddy</h4>
                </a>

            </Row>
        </WorkContainer >
    )
}

export default Work


const WorkContainer = styled(Container)`
    background-color:#1e6b96;
    font-family: 'Open Sans', sans-serif;
    padding:5%;
    margin:2%;
    max-width: 96%;
`

