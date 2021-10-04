import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, CardGroup, Carousel, Col, Form, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import Services from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
// slider with login form
        <div>
            <Carousel className="mt-5 mb-5">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-75 mx-auto"
      src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2019/10/Driver-Eye-Movement-MOTR-Story-10-22-19.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <Form>
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
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Radios
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="second radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="third radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
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
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-75 mx-auto"
      src="https://media.istockphoto.com/photos/cute-young-success-happy-brunette-woman-is-driving-a-car-picture-id1223392906?k=20&m=1223392906&s=612x612&w=0&h=synhQ0D3qMYilpP6ZRJsnXPigBSXnbv4jFZLAeXqrLY=" alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
   
  </Carousel.Item>
</Carousel>

{/* services start */}
<div>
<div class="row row-cols-1 row-cols-md-2 m-0 gy-5">
{
    services.slice(0, 4).map(service => <Service service={service}></Service> )
}
 
      </div>



</div>

        </div>
    );
};

export default Home;