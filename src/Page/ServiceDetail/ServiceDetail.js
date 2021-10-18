import React from 'react';
import { useParams } from 'react-router';

const ServiceDetail = ({ Services }) => {
    const { serviceId, img } = useParams();
    // const { img } = Services;

    return (
        <div className="m-5 p-5">
            <h1>This is Details: {serviceId} </h1>
            <img src={img} alt="" />
        </div>
    );
};

export default ServiceDetail;