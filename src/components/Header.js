import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header() { 

return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">PiAware Test View</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="/mapReactGL">Map</Nav.Link>
                    <Nav.Link href="https://github.com/ericYagerPractice/piAwareFront">Repo</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);
}