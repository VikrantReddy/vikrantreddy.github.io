import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ReactComponent as Logosvg } from "../assets/svgs/logo.svg";

function Mainnav() {
    const smoothscroll = (event, elem_id) => {
        let hero = document.getElementById(elem_id);
        event.preventDefault();  // Stop Page Reloading
        hero && hero.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#hero">Vikrant Reddy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto" >
                            <Nav.Link href="/" onClick={(evt) => smoothscroll(evt, "home")}>Home</Nav.Link>
                            <Nav.Link href="/" onClick={(evt) => smoothscroll(evt, "about")}> About</Nav.Link>
                            <Nav.Link href="/" onClick={(evt) => smoothscroll(evt, "work")} > My Work</Nav.Link>
                            <Nav.Link href="/" onClick={(evt) => smoothscroll(evt, "contact")} > Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar >
        </div >
    )
}

export default Mainnav
