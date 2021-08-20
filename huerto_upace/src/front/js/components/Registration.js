import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Card } from 'react-bootstrap'

export const Registration = (props) => {


    return (
        <div className="d-flex flex-column justify-content-center">
            <h3 className="m-3 text-center">Regístrate y visita nuestra tienda</h3>
            <Card style={{ width: '25rem' }} className="registration-form-container">
                <Form className="text-center">
                    <Form.Group className="mb-3 mt-3">
                        <Form.Control id="input" type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control className="input" type="text" placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control className="input" type="text" placeholder="Apellidos" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control className="input" type="text" placeholder="Dirección" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control className="input" type="text" placeholder="Teléfono" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className="input"type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </Card>
        </div >
    );
};

Registration.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func
};
