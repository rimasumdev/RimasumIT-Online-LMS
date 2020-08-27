import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {

    return (
        <div className="header">
            <div className="container">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Rimasum IT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Services</Nav.Link>
                            <NavDropdown title="Courses" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Computer Fundamental</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Web Design</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Web Development</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Graphic Design</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Networking</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Database Programing</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">C Programing</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">C++ Programing</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">AutoCad</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Game Development</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">C# Programing</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Java Programing</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;