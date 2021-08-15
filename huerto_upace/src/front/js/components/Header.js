import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';


export const Header = () => {


    return (
        <Navbar id="header" collapseOnSelect expand="lg" variant="light" >
            <Navbar.Brand href="#home" className="logos-navbar">
                <img src="images/logo_upace.jpg" alt="Logo upace" />
                <img src="images/logo_aspace.jpg" alt="Logo aspace" />
            </Navbar.Brand>



            <div className="header-title">
                <p>¡Bienvenid@ a nuestro huerto!</p>
                <p>Descubre de que somos capaces</p>
            </div>


            <Nav className="buttons-container">
                <Nav.Link href="#contact-info"><img className="button-navbar" src="images/info.svg" alt="Info icon" /></Nav.Link>
                <Nav.Link href="#login"><img className="button-navbar" src="images/login-icon.svg" alt="Login icon" /></Nav.Link>
                <Nav.Link href="#cart"><img className="button-navbar" src="images/shopping-basket.svg" alt="Cart" /></Nav.Link>
            </Nav>
        </Navbar >
    )
};