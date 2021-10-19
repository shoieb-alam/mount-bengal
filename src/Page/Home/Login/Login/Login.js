import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import './Login.css';

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
        <div className="bg-login">
            <div className="p-5 bg-login2">
                <div className="p-5 mx-auto w-50 text-start bg-light">

                    <Form onSubmit={handleRegistration}>

                        {/* dynamically showing form header  */}
                        <h3 className="text-center mb-5">
                            {isLogin ? 'Login' : 'Sign Up'}
                        </h3>

                        {/* showing name field if new user */}
                        {!isLogin &&
                            <Form.Group
                                className="mb-3" controlId="formBasicName">
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

                        {/* showing error/succuss massage  */}
                        <div className="d-flex justify-content-between">
                            <div className="fw-bold">
                                <span className="text-danger">{error}</span>
                                <span className="text-success">{message}</span>
                            </div>

                            {/* password reseting  */}
                            <div>
                                <p onClick={handleResetPassword} type="button" className="text-end">Forgot Password?</p>
                            </div>
                        </div>

                        {/* toggling between login / sign up */}
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                onChange={toggleLogin}
                                label="Already have an account?"
                            />
                        </Form.Group>

                        <div className="d-flex">
                            <Button variant="dark" type="submit" className="w-50 btn-outline-danger rounded-pill fw-bold text-white mt-4 mx-1">{isLogin ? 'Login' : 'Sign Up'} </Button>

                            {/* google signin  */}
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