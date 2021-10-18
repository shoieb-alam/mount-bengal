import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center my-5 p-5">
                <div className="p-5 text-start bg-light">
                    <div className="m-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <div className="d-grid text-center">
                            <Button variant="danger" type="submit">
                                Sign in
                            </Button>
                            <br />
                            <Button onClick={signInUsingGoogle} variant="danger" type="submit">
                                SignIn with Google
                            </Button>
                            <br />
                            <Link className="text-decoration-none" to="/register"><p className="text-danger">Don't have an account? </p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;