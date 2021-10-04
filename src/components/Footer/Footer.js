import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Card className="bg-dark text-white mt-5">
  <Card.Img src="https://png.pngtree.com/thumb_back/fh260/background/20190222/ourmid/pngtree-blue-atmospheric-background-image_50584.jpg" height="300px" alt="Card image" />
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