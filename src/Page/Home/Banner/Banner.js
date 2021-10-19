import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div id="banner">

            {/* banner carousel */}
            <Carousel fade>

                <Carousel.Item >
                    <img
                        className="d-block w-100 h-50"
                        src="https://i.ibb.co/r449CDL/azmat-health-horizontal.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-black banner-text">
                        <h5>Welcome to MOUNT BENGAL Hospital</h5>
                        <h1 className="fw-bold mb-5 pb-5">EXCEPTIONAL CARE FOR EVERY PATIENT</h1>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="https://i.ibb.co/VDTpfDW/Shot-of-two-doctors-using-a-digital-tablet-during-a-discussion-in-a-clinic.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="text-black banner-text">
                        <h5>Welcome to MOUNT BENGAL Hospital</h5>
                        <h1 className="fw-bold mb-5 pb-5">PROVIDING THE BEST MEDICAL CARE</h1>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="https://i.ibb.co/FXdY5nP/success-smart-medical-doctor-working-with-operating-room-as-concept-1024x542.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-black banner-text">
                        <h5>Welcome to MOUNT BENGAL Hospital</h5>
                        <h1 className="fw-bold mb-5 pb-5">WE HAVE QUALIFIED DOCTORS</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;