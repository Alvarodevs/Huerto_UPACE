import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Registration = (props) => {
    const [ userData, setUserData] = useState({
        email:'',
        nombre:'',
        apellidos:'',
        direccion:'',
        telefono:'',
        password:''
    }); 

    const handleUserData = e => {
        const { name, value } = e.target;
        setUserData(prevState => ({ ...prevState, [name]: value }));
    };

    

    return (
        <div className="d-flex flex-column justify-content-center">
            <h3 className="m-3 text-center">Regístrate y visita nuestra tienda</h3>
            <Card style={{ width: '25rem' }} className="registration-form-container">
                <div className="justify-content-end">
                    <Link to="/">
                        <Button className="close-button"><img src=".\images\window-close-solid.svg"></img></Button>
                    </Link>
                </div>
                <Form className="text-center">
                    <Form.Group className="mb-3 mt-3">
                        <Form.Control id="input" type="email" placeholder="Email" name="email" onChange={handleUserData}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control id="input" type="text" placeholder="Nombre" name="nombre" onChange={handleUserData}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control id="input" type="text" placeholder="Apellidos" name="apellidos" onChange={handleUserData}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control id="input" type="text" placeholder="Dirección" name="direccion" onChange={handleUserData}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control id="input" type="text" placeholder="Teléfono" name="telefono" onChange={handleUserData}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control id="input" type="password" placeholder="Password" name="password" onChange={handleUserData}/>
                    </Form.Group>
                </Form>
                <div className="registration-button">
                    <Button type="submit">Registro</Button>
                </div>
            </Card>
        </div >
    );
};

Registration.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func
};
