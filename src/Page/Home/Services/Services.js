import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="py-5 bg-light">
            <h4>Our Services</h4>
            <h1 className="fw-bold">We're <span className="text-danger">Offering</span></h1>
            <div className="py-5">
                <Container>
                    <Row xs={1} md={2} lg={3}>
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Services;