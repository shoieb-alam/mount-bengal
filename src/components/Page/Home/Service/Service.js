import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, img, name, title } = service;

    return (
        <div className="bg-dark p-4">
            <Col>
                <Card as={Link} to={`/services/${id}`} className="card text-decoration-none rounded-3 py-2 h-100">
                    <Card.Img variant="top" src={img} className="w-75 mx-auto" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <h6> {title} </h6>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;