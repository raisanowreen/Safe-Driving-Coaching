import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Carousel, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Service from '../Service/Service';

const Home = () => {
    // fetching services api from local file
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

// adding dynamic event handler
    const history = useHistory();
    const handleCourseClick = () =>{
history.push('/allservices')
    }
    return (
// slider with login form
        <div>
            <Carousel className="mt-5 mb-5">
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-75 mx-auto"
      src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2019/10/Driver-Eye-Movement-MOTR-Story-10-22-19.png"
      alt="First slide"
    />
    <Carousel.Caption className="text-white text-start">
      <h3>The best drivers are aware that they must be beware.</h3>
      <Form className="bg-success p-3 rounded w-50">
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <fieldset>
  </fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-75 mx-auto"
      src="https://www.assurancedrivingschool.com.au/wp-content/uploads/2020/09/Male-Driving-Instructor.jpg"
      alt="Second slide"
    />
    <Carousel.Caption className="text-warning">
      <h3>Alert today – Alive tomorrow</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-75 mx-auto"
      src="https://media.istockphoto.com/photos/cute-young-success-happy-brunette-woman-is-driving-a-car-picture-id1223392906?k=20&m=1223392906&s=612x612&w=0&h=synhQ0D3qMYilpP6ZRJsnXPigBSXnbv4jFZLAeXqrLY=" alt="Third slide"
    />
    <Carousel.Caption className="text-warning">
      <h3>If you know you are driving to your death –would you still drive so fast?</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

{/* services start */}
<h3 className="text-success text-center">Our Courses</h3>
<div>
      <div class="row row-cols-1 row-cols-md-2 m-0 gy-5">
          {/* sending dynamic props */}
{
    services.slice(0, 4).map(service => <Service service={service}></Service> )
}
 
      </div>
     <div className="d-flex justify-content-center m-5">
     <Button onClick={handleCourseClick} variant="outline-info">More courses</Button>{' '}
     </div>
</div>
        </div>
    );
};

export default Home;