import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <Card className="bg-dark text-white mt-5">
  <Card.Img src="https://png.pngtree.com/thumb_back/fh260/background/20190222/ourmid/pngtree-blue-atmospheric-background-image_50584.jpg" height="340px" alt="Card image" />
  <Card.ImgOverlay>
    <div className="d-flex justify-content-around">
      <div>
        <h1>Popular Courses</h1>
        <h6>Bus driving</h6>
        <h6>Scooter driving</h6>
        <h6>Taxi driving</h6>
        <h6>Bike driving</h6>
        <h6>Ambulance driving</h6>
      </div>
      <div>
        <h1>Quick Links</h1>
        <h6><Link to="/about"></Link>About us</h6>
        <h6><Link to="allservices"></Link>Our services</h6>
        <h6><Link to="/portfolio"></Link>Know us</h6>
        <h6><Link to="/faq"></Link>Faq</h6>
        <h6><Link to="/contact"></Link>Contact us</h6>
      </div>
    </div>
    <div className="m-3">
      <div className="d-flex justify-content-center">
      <i className="fab fa-facebook me-5 fs-2"></i>
      <i className="fab fa-instagram me-5 fs-2"></i>
      <i className="fab fa-youtube me-5 fs-2"></i>
      </div>
      <p className="text-center p-3"><i class="far fa-copyright"></i>2021. All rights are reserved to <span className=" text-warning">safe driving.</span></p>
    </div>
  </Card.ImgOverlay>
</Card>
        </div>
    );
};

export default Footer;