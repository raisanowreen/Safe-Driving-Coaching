import React from 'react';
import { Button, Card, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="mt-5">
            <Card className="text-black fw-bolder fs-4">
  <Card.Img src="https://wallpaperaccess.com/full/1816873.jpg" height="1500px" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className="text-warning text-center mt-5 fs-1">What we do</Card.Title>
    <Card.Text className="text-center mt-5">
    Learning to drive is something we only ever plan and intend to do once. It's the skill that we carry throughout life, and never truly stop learning. With driving, experience helps build our confidence, and most importantly our safety on the roads. When considering and setting certain goals in life, learning to drive can have a profound impact on many different areas of our life. 
    </Card.Text>
    <Card.Text className="text-center mt-5">We Safe Driving Coaching is the most promising institution. We solely focus on the driving skill betterment of our trainees. We provide manpower with the utmost knowledge let you learn, to let your dream come true. We know your urge to drive your newly bought motor vehicle. Thus we have planned an effective course plan to feed your driving skill. No matter whether you are a newbie, a mid-level rider or an experienced one, we have something to offer you.</Card.Text>
    <div>
        <h1 className="text-black fs-2 fw-bolder text-center mt-5">Want to know more? Subscribe for monthly newsletter.</h1>
    <Form className="mx-auto w-50 mt-5">
  <Row className="align-items-center">
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
    </Col>
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
        Username
      </Form.Label>
      <InputGroup>
        <InputGroup.Text>@</InputGroup.Text>
        <FormControl id="inlineFormInputGroupUsername" placeholder="Username" />
      </InputGroup>
    </Col>
    <Col xs="auto" className="my-1">
      <Form.Check type="checkbox" id="autoSizingCheck2" label="Remember me" />
    </Col>
    <Col xs="auto" className="my-1">
      <Button type="submit">Submit</Button>
    </Col>
  </Row>
</Form>
    </div>
  </Card.ImgOverlay>
</Card>
        </div>
    );
};

export default About;