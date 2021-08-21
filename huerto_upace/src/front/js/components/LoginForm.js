import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import { Modal, Button, Form } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

export const Login = (props) => {
    console.log(props)
    const [show, setShow] = useState("");
    
    useEffect(() => {
        setShow(props.show);
      }, [props]);

    const { loginWithRedirect } = useAuth0();

    return (
        
        <div>
            <Modal
                className="modal-login"
                show={show}
                onHide={props.onHide}
            >
                <Form className="form-container">
                    <Button className="close-button justify-content-end" onClick={props.onHide}>
                       <img src=".\images\window-close-solid.svg"></img>
                    </Button>

                    <h3 className="mb-3"> Accede con tu usuario</h3>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="d-flex flex-row justify-content-end mb-3">
                        
                            {/* <Form.Check type="checkbox" label="Recuérdame" /> */}
                            <Form.Text className="text-muted">
                            ¿No tienes cuenta?
                            </Form.Text>
                    </div>

                    <div className="modal-buttons-container">
                        <div>
                            <Button type="submit" onClick={() => loginWithRedirect()}>
                            Login
                            </Button>
                        </div>

                        <div>
                            <Button type="submit" onClick={props.onHide}>
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