import React, {useState} from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Login } from './LoginForm';


export const Header = () => {
    const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
    

    return (
        <Navbar id="header" collapseOnSelect expand="lg" variant="light" >
            <Link to='/'>
                <Navbar.Brand href="#home" className="logos-navbar">
                    <img src="images/logo_upace.jpg" alt="Logo upace" />
                    <img src="images/logo_aspace.jpg" alt="Logo aspace" />
                </Navbar.Brand>
            </Link>



            <div className="header-title">
                <p>¡Bienvenid@ a nuestro huerto!</p>
                <p>Descubre de que somos capaces</p>
            </div>


            <Nav className="buttons-container">
                <Nav.Link className="info-icon"><img className="button-navbar" src="images/info.svg" alt="Info icon" /></Nav.Link>

                <Nav.Link >
                    <img className="button-navbar" src="images/login-icon.svg" alt="Login icon" onClick={handleShow}/>
                    <Login show={show} onHide={() => setShow(false)}/>
                </Nav.Link>

                <Nav.Link><img className="button-navbar" src="images/shopping-cart.svg" alt="Cart" /></Nav.Link>
            </Nav>
        </Navbar >
    )
};