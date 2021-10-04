import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Card className="bg-dark text-white mt-5">
  <Card.Img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1020317514%2F960x0.jpg%3Ffit%3Dscale" height="300px" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
        </div>
    );
};

export default Footer;