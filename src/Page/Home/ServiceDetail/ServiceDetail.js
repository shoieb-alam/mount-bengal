import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    const [serviceDetail, setserviceDetail] = useState([]);

    const [singleService, setSingleService] = useState([]);

    // data loading for dynamic route
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setserviceDetail(data))
    }, [])

    //finding specific property according to respective id
    useEffect(() => {
        const foundService = serviceDetail.find(service => service.id === serviceId)
        setSingleService(foundService);
    }, [serviceDetail])

    return (
        <div className="p-5 bg-light text-start">

            <Container>
                <h2>{singleService?.heading} </h2>
                <Row xs={1} md={2} lg={2} className="py-3">

                    {/* showing images in card  */}
                    <Col>
                        <Card>
                            <img src={singleService?.img} className="w-75 m-3 rounded-3 mx-auto" alt="" />
                            <img src={singleService?.img2} className="w-75 m-3 rounded-3 mx-auto" alt="" />
                        </Card>
                    </Col>

                    {/* showing data  */}
                    <Col>
                        <p>{singleService?.description}</p>
                        <br />
                        <h3>{singleService?.heading2} </h3>
                        <p>{singleService?.description2}</p>
                    </Col>

                </Row>
            </Container>
        </div >
    );
};

export default ServiceDetail;