import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="d-flex align-items-center justify-content-center my-5 p-5">
            <div className="p-5 text-start bg-light">
                <div className="m-5">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="name" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <div className="d-grid text-center">
                        <Button variant="danger" type="submit">
                            Sign in
                        </Button>
                        <br />
                        <Button onClick={signInUsingGoogle} variant="danger" type="submit">
                            SignUp with Google
                        </Button>
                        <br />
                        <Link className="text-decoration-none" to="/login"><p className="text-danger">Already have an account</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;