import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

function Work() {
    return (
        <WorkContainer>
            <h2 style={{ "textAlign": "center", "marginBottom": "10vh", "color": "white" }}>My Works</h2>
            <Row xs={1} md={2} className="g-8 mx-auto">
                <WorkCol>
                    <WorkCard style={{ width: '18rem' }} className="mx-auto" >
                        <Card.Body>
                            <Card.Title>OCR Pipleline</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Python</Card.Subtitle>
                            <Card.Text>
                                A pipeline of scripts to scrape, screenshot and convert tables into sheets and further test their websites for legible leads
                            </Card.Text>
                        </Card.Body>
                    </WorkCard>
                </WorkCol>
                <WorkCol>
                    <WorkCard style={{ width: '18rem' }} className="mx-auto" >
                        <Card.Body>
                            <Card.Title>Automated Dropshipping</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Python</Card.Subtitle>
                            <Card.Text>
                                Plug and play scripts to scrape ecom websites with a CMS like shopify or squarespace to create your own dropshipping business
                            </Card.Text>
                        </Card.Body>
                    </WorkCard>
                </WorkCol>
                <WorkCol>
                    <WorkCard style={{ width: '18rem' }} className="mx-auto" >
                        <Card.Body>
                            <Card.Title>Synchronized Player</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Javascript</Card.Subtitle>
                            <Card.Text>
                                A chrome extension that lets you watch your favorite tv shows and movies with your friends on any video platform
                            </Card.Text>

                        </Card.Body>
                    </WorkCard>
                </WorkCol>
                <WorkCol>
                    <WorkCard style={{ width: '18rem' }} className="mx-auto" >
                        <Card.Body>
                            <Card.Title>Advanced Text Snipper</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Python</Card.Subtitle>
                            <Card.Text>
                                Windows native snipper with additional character recognition features from the core to copy text from images on the go
                            </Card.Text>
                        </Card.Body>
                    </WorkCard>
                </WorkCol>

                <WorkCol>
                    <WorkCard style={{ width: '18rem' }} className="mx-auto" >
                        <Card.Body>
                            <Card.Title>Parking finder</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">React Native & C#</Card.Subtitle>
                            <Card.Text>
                                A programmed ESP8266 with a web socket server hosted on cloud to help users navigate to the closest vaccant parking spot
                            </Card.Text>
                        </Card.Body>
                    </WorkCard>
                </WorkCol>
                <WorkCol>
                    <WorkCard style={{ width: '18rem' }} className="mx-auto" >
                        <Card.Body>
                            <Card.Title>Excel to Database</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Python & Google Sheets</Card.Subtitle>
                            <Card.Text>
                                A database with CRUD operations on a cloud hosted google sheets speadsheet for MVP testing and showcasing purposes
                            </Card.Text>

                        </Card.Body>
                    </WorkCard>
                </WorkCol>
                <WorkCol>
                    <WorkCard style={{ width: '18rem' }} className="mx-auto"  >
                        <Card.Body>
                            <Card.Title>Amazon Watcher</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Python</Card.Subtitle>
                            <Card.Text>
                                Scrapes selected amazon products periodically and notifies user via E-mail when the item under watch is on a discont
                            </Card.Text>
                        </Card.Body>
                    </WorkCard>
                </WorkCol>
                <WorkCol>
                    <WorkCard style={{ width: '18rem' }} className="mx-auto" >
                        <Card.Body>
                            <Card.Title>Mobile Mouse</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">React Native & Python</Card.Subtitle>
                            <Card.Text>
                                An app that lets users use their phone by sensing the accelerometer to scroll through long web comics
                            </Card.Text>
                        </Card.Body>
                    </WorkCard>
                </WorkCol>
            </Row>
        </WorkContainer >
    )
}

export default Work


const WorkContainer = styled(Container)`
    background-color:#1642DB;
    font-family: 'Open Sans', sans-serif;
    padding:5%;
    margin:2%;
    max-width: 96%;
`

const WorkCol = styled(Col)`
    margin: 1rem 0;
`
const WorkCard = styled(Card)`
    background-color:#f2f2f2;
    height:12.5rem;
`
