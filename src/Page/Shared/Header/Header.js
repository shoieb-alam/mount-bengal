import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>

            {/* responsive navbar */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header" fixed="top">

                <Container>
                    <Navbar.Brand as={Link} to="/">

                        <div className="d-flex text-start">
                            <div>
                                <img
                                    src={logo}
                                    width="60"
                                    height="60"
                                    className="d-inline-block align-top me-2"
                                    alt="logo"
                                />
                            </div>
                            <div>
                                <span className="brand">MOUNT BENGAL </span> <p> <small className="text-danger">Hospital </small> </p>
                            </div>
                        </div>

                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto fw-bold">
                            <Nav.Link as={HashLink} to="/home#banner">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>

                            {/* showing username in the navbar if the user logged in  */}
                            {user?.email ?
                                <>
                                    <p className="text-white m-2"> Signed in as:
                                        <Link to="/login">
                                            {user?.displayName}
                                        </Link>
                                    </p>
                                    <Button onClick={logOut} variant="danger" className="rounded-pill px-3">Logout</Button>
                                </>
                                :
                                <Nav.Link as={Link} to="/login" className="btn-outline-danger rounded-pill px-3">Login</Nav.Link>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;