import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import styled from 'styled-components'

function Work() {
    return (
        <WorkContainer>
            <h2 style={{ "textAlign": "center" }}>My Works</h2>

            <Carousel style={{ "margin": "4% 0" }}>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </WorkContainer >
    )
}

export default Work


const WorkContainer = styled(Container)`
    background-color:#4682DB;
    color:#f2f2f2;
    font-family: 'Open Sans', sans-serif;
    padding:5%;
    margin:2%;
    max-width: 96%;
`
