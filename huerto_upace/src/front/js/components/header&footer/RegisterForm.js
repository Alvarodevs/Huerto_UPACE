import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const RegisterForm = (props) => {
    const initialInputState = {
		user: "",
		name: "",
		lastName: "",
		email: "",
		address: "",
		phone: "",
		password: ""
	};
    const [ eachInput, setEachInput] = useState(initialInputState); 

    //Storing data from user to register
    const handleUserInput = e => {
        const { name, value } = e.target;
        setEachInput({ ...eachInput, [name]: value });
    };

    //Fetching user data to DB
    // const handleRegisterSubmit = e =>{
    //     e.preventDefault();
    //     var raw = JSON.stringify(userData);
    //     var requestOptions = {
    //         method: "POST",
    //         body: raw,
    //         headers: { "Content-Type": "application/json" }
    //     };
    //     fetch({API_DATABASE_URL}/registration, requestOptions)
    //         .then(response => response.json())
    //         .then(result => {
    //             localStorage.setItem("accessToken", result["accessToken"]);
    //         })
    // };

    console.log(eachInput);
    return (
        <div className="d-flex flex-column justify-content-center">
            <h3 className="m-3 text-center">Regístrate y visita nuestra tienda</h3>
            <Card style={{ width: '25rem' }} className="registration-form-container">
                <div className="justify-content-end">
                    <Link to="/">
                        <Button className="close-button"><img src=".\images\window-close-solid.svg"></img></Button>
                    </Link>
                </div>
                <Form className="text-center" action="/registration" method="POST">
                <Form.Group className="mb-3">
                        <Form.Control className="input" type="text" placeholder="Usuario/a" name="user" onChange={handleUserInput}/>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                        <Form.Control className="input" type="email" placeholder="Email" name="email" onChange={handleUserInput}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control className="input" type="text" placeholder="Nombre" name="name" onChange={handleUserInput}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control className="input" type="text" placeholder="Apellidos" name="lastName" onChange={handleUserInput}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control className="input" type="text" placeholder="Dirección" name="address" onChange={handleUserInput}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control className="input" type="text" placeholder="Teléfono" name="phone" onChange={handleUserInput}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control className="input" type="password" placeholder="Password" name="password" onChange={handleUserInput}/>
                    </Form.Group>
                </Form>
                <div className="registration-button">
                    <Button type="submit">Registro</Button>
                </div>
            </Card>
        </div >
    );
};

RegisterForm.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func
};
