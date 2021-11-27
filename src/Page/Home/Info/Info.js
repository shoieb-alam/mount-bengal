import { faHandHoldingMedical, faClock, faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './info.css'


const Info = () => {
    return (
        <div className="py-5 m-5 bg-light">
            <Container>
                <Row xs={1} md={2} lg={3}>
                    <Col className="info-col p-4 rounded-3">
                        <FontAwesomeIcon className="m-4" icon={faClock} size='5x' />
                        <h3>Doctors Timetable</h3>
                        <p>Find Doctor's Timetable from our website and give appointment at your convenient time.</p>
                    </Col>
                    <Col className="info-col-middle p-4 rounded-3">
                        <FontAwesomeIcon className="m-4" icon={faHandHoldingMedical} size='5x' />
                        <h3>Health Information</h3>
                        <p>We're always beside you to serve our best for your Health</p>
                    </Col>
                    <Col className="info-col p-4 rounded-3">
                        <FontAwesomeIcon className="m-4" icon={faFileMedical} size='5x' />
                        <h3>Medical Education</h3>
                        <p>Know more about medical educaiton from our doctors</p>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Info;