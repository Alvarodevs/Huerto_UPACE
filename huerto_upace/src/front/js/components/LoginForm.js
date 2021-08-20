import React from 'react'
import PropTypes from "prop-types";
import { Modal, Button, Form } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

export const Login = (props) => {

    const { loginWithRedirect } = useAuth0();

    return (
        
        <div>
            <Modal
                className="modal-login"
                show={props.show}
                onHide={props.onHide}
            >
                <Form className="form-container">
                    <h3 className="mb-3"> Accede con tu usuario</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="d-flex flex-row justify-content-between mb-3">
                        
                            <Form.Check type="checkbox" label="Recuérdame" />
                            <Form.Text className="text-muted">
                            ¿No tienes cuenta?
                            </Form.Text>
                    </div>
                    <div className="modal-buttons-container">
                        <div>
                            <Button variant="primary" type="submit">
                            Login
                            
                            </Button>
                        </div>
                        <div>
                            <Button variant="primary" type="submit" onClick={() => loginWithRedirect()}>
                                <Link to="/registration">
                                Regístrate
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Form>
            </Modal>
        </div>
    );
};

Login.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func
};