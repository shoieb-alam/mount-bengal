import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className="bg-404">
                <Button as={Link} to="/home" className="btn-404 rounded-pill btn-lg btn-info fw-bold">GO BACK TO EARTH</Button>
            </div>
        </div>
    );
};

export default NotFound;