import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Doctors = () => {
    return (
        <div className="bg-light p-5">
            <h1 className="py-3 fw-bold">OUR <span className="text-danger">CONSULTANTS</span> </h1>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                <Col>
                    <Card className="my-3 h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/mvbysMr/Dr-Saifuddin-Mahmud-Medicine.jpg" />
                        <Card.Body>
                            <Card.Title>DR. SAIFUDDIN MAHMUD</Card.Title>
                            <Card.Text>
                                MBBS, BCS (Health)
                                <br />
                                FCPS (Medicine)
                                <br />
                                Consultant, Medicine
                                <br />
                                Room No.: 320
                                <br />
                                Serial: Call our Hotline
                                <br />
                                Time: 6.30pm to 9pm (Sat to Thu)
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="my-3 h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/2WQSXSr/Dr-Umme-Tahera-Medicine.jpg" />
                        <Card.Body>
                            <Card.Title>DR. UMME TAHERA</Card.Title>
                            <Card.Text>
                                MBBS, FCPS (Medicine)
                                <br />
                                Assistant Professor, Medicine
                                <br />
                                Chittagong Int. Medical College
                                <br />
                                Room No.: 318
                                <br />
                                Serial: Call our hotline
                                <br />
                                Time: 6 pm -9 pm (Thu & Friday Off)
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="my-3 h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/0BHyYDz/Dr-Shafiul-Alam.jpg" />
                        <Card.Body>
                            <Card.Title>DR. SAFIUL ALAM</Card.Title>
                            <Card.Text>
                                MBBS, BCS (Health), MD (Cardiology)
                                <br />
                                Assistant Professor, Cardiology
                                <br />
                                Chittagong Medical College [Ex.]
                                <br />
                                Room No.: 213
                                <br />
                                Serial: 01813-305442
                                <br />
                                Time: 6pm to 9pm (Fri & Tues Off)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="my-3 h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/MP3N80L/Dr-Iqbal-Mahmud-Cardiologist.jpg" />
                        <Card.Body>
                            <Card.Title>DR. IQBAL MAHMUD</Card.Title>
                            <Card.Text>
                                MBBS, BCS (Health), MD (Cardiology)
                                <br />
                                Consultant, Cardiology, Chittagong Medical College
                                <br />
                                Room No.: 302
                                <br />
                                Serial: 01922-992889
                                <br />
                                Time: 6pm to 9pm (Sat-Wed)
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="my-3 h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/3SZC5Gy/Dr-Saiful-Islam-Tipu-Cardiology-1.jpg" />
                        <Card.Body>
                            <Card.Title>DR. SAIFUL ISLAM TIPU CHOWDHURY</Card.Title>
                            <Card.Text>
                                MBBS, BCS (Health)
                                <br />
                                MD (Cardiology)
                                <br />
                                Room No.: 227
                                <br />
                                Serial: Call our Hotline
                                <br />
                                Time: 7pm to 9pm (Friday OFF)
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="my-3 h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/0sx8Ncn/Dr-Jashim-Uddin-Gastro-Medicine.jpg" />
                        <Card.Body>
                            <Card.Title>DR. MOHAMMAD JASHIM UDDIN</Card.Title>
                            <Card.Text>
                                MBBS, FCPS (Medicine)
                                <br />
                                MD (Gastroenterology)
                                <br />
                                Serial: 01768219681
                                <br />
                                Time: 12pm to 7pm (Sat , Sun & Mon)
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="my-3 h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/PzfsySk/Dr-Jamal-Hossain-ENT.jpg" />
                        <Card.Body>
                            <Card.Title>DR. MOHAMMAD JAMAL HUSSAIN</Card.Title>
                            <Card.Text>
                                MBBS, BCS (Health)
                                <br />
                                FCPS (ENT), MS (Thesis)
                                <br />
                                Associate Professor, ENT
                                <br />
                                Room No: 311
                                <br />
                                Serial: Call our Hotline
                                <br />
                                Time: 5.30pm to 6.30pm(Friday off)
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="my-3 h-100">
                        <Card.Img variant="top" src="https://i.ibb.co/K0gHKFK/Dr-Mohsin-Orthopedics.jpg" />
                        <Card.Body>
                            <Card.Title>DR. MOHAMMAD MUHSIN</Card.Title>
                            <Card.Text>
                                MBBS, D.Ortho
                                <br />
                                Consultant, Orthopedics & Trauma
                                <br />
                                Room No: 205
                                <br />
                                Serial: Call our Hotline
                                <br />
                                Time: 5pm to 7pm (Friday off)
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Doctors;