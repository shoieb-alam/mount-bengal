import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, img, name, title } = service;

    return (
        <div className="bg-service p-4 rounded">

            {/* showing service data in home page */}
            <Col>
                <Card as={Link} to={`/services/${id}`} className="card text-decoration-none rounded-pill py-2 h-100">
                    <Card.Img variant="top" src={img} className="w-75 rounded-pill mx-auto" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <h6> {title} </h6>
                        </Card.Text>
                        <Button variant="dark" className="btn-outline-light">View Details</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Service;