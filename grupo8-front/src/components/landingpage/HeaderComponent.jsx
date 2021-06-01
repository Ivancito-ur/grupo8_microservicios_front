
import React, { Component } from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthenticateService from '../../Autenticacion/AuthenticateService.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from 'react-bootstrap/esm/Switch';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import LoginComponent from './LoginComponent.jsx';

class HeaderComponent extends Component {
    render() {
        const authenticated = AuthenticateService.getAuthenticated();
        return (
              
                <header>
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="ligth" className="fixed-top">
                        <Navbar.Brand href="/">Sinplafut</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#inicio">Inicio</Nav.Link>
                                <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                                <Nav.Link href="#equipo">Equipo</Nav.Link>
                                <Nav.Link href="#contacto">Contacto</Nav.Link>
                            </Nav>
                            <Nav className="navbar-collapse justify-content-end">
                               <Nav.Link href="/login">Iniciar sesion</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
           
        );
    }

    logOut() {

    }
}

export default HeaderComponent;
