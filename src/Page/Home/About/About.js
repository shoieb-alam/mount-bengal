import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="bg-light text-start py-5">
            <Container>
                <h2 className="text-danger pb-5"> <i> MOUNT BENGAL HOSPITAL LTD. </i></h2>

                <p className="">MOUNT BENGAL HOSPITAL LTD. is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment to improve the lives of people through utmost service excellence for a lot time. MOUNT BENGAL HOSPITAL is one of the ventures of BENGAL Group which is the top business group of the country.
                    The reputation of MOUNT BENGAL HOSPITAL LTD. is the resultof quality clinical outcome and comprehensive care, madeachievable through world class integrated healthcarefacilities by highly trained professionals. Thus, SquareHospitals strives to meet patients’ standards throughquality healthcare and making a difference in their lives.
                </p>

                <div className="py-3">
                    <h2 className="fw-bold"> <i> <u> MISSION </u> </i></h2>
                    <Row className="mt-4">
                        <Col md={2} className="fw-bold">
                            <h3>Deliver QUALITY health care within 5 CORE standards</h3>
                        </Col>
                        <Col md={10}>
                            <ul>
                                <li>
                                    Adhering to high ethical and moral standards at all times
                                </li>
                                <hr />
                                <li>
                                    Making service quality top priority in all we do
                                </li>
                                <hr />
                                <li>
                                    Training staff to work within a quality care environment
                                </li>
                                <hr />
                                <li>
                                    Providing quality health care service in all processes
                                </li>
                                <hr />
                                <li>
                                    Delivering customer satisfaction through quality service
                                </li>
                                <hr />
                            </ul>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default About;