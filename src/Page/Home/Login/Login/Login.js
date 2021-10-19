import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, isLogin,
        handleRegistration,
        handleNameChange,
        handleEmailChange,
        handlePassChange,
        toggleLogin,
        handleResetPassword,
        error,
        message
    } = useAuth();

    return (
        <div>
            <div className="mx-auto p-5 bg-dark w-50 ">
                <div className="p-5 text-start bg-light">
                    <Form onSubmit={handleRegistration}>
                        <h3 className="text-center mb-5">{isLogin ? 'Login' : 'Sign Up'}</h3>
                        {!isLogin &&
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="name"
                                    onBlur={handleNameChange} placeholder="Enter name"
                                    required
                                />
                            </Form.Group>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                onBlur={handleEmailChange}
                                placeholder="Enter email"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                onBlur={handlePassChange} placeholder="Password"
                                required
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-between">
                            <div className="fw-bold">
                                <span className="text-danger">{error}</span>
                                <span className="text-success">{message}</span>
                            </div>
                            <div>
                                <p onClick={handleResetPassword} type="button" className="text-end">Forgot Password?</p>
                            </div>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                onChange={toggleLogin}
                                label="Already have an account?"
                            />
                        </Form.Group>

                        <div className="d-flex">
                            <Button variant="dark" type="submit" className="w-50 btn-outline-danger rounded-pill fw-bold text-white mt-4 mx-1">{isLogin ? 'Login' : 'Sign Up'} </Button>

                            <Button onClick={signInUsingGoogle} variant="light" type="submit" className="w-50 btn-outline-danger rounded-pill fw-bold mt-4 mx-1">
                                <FontAwesomeIcon icon={faGoogle} /> Continue with Google
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;