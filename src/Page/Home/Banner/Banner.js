import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div id="banner">
            <Carousel fade>
                <Carousel.Item >
                    <img
                        className="d-block w-100 h-50"
                        src="https://www.bankalfalah.com/wp-content/uploads/2020/11/azmat-health-horizontal.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-black">
                        <h5>Welcome to MOUNT BENGAL Hospital</h5>
                        <h1 className="fw-bold">EXCEPTIONAL CARE FOR EVERY PATIENT</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="https://news.elearninginside.com/wp-content/uploads/2018/03/success-smart-medical-doctor-working-with-operating-room-as-concept-1024x542.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h5>Welcome to MOUNT BENGAL Hospital</h5>
                        <h1 className="fw-bold">WE HAVE QUALIFIED DOCTORS</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="https://i.ibb.co/VDTpfDW/Shot-of-two-doctors-using-a-digital-tablet-during-a-discussion-in-a-clinic.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h5>Welcome to MOUNT BENGAL Hospital</h5>
                        <h1 className="fw-bold">PROVIDING THE BEST MEDICAL CARE</h1>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;