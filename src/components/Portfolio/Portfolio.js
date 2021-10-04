import React from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { Pie, PieChart, Tooltip } from 'recharts';

const Portfolio = () => {
    const data01 = [
        { name: 'Bike', value: 400 },
        { name: 'Bus', value: 300 },
        { name: 'Scooter', value: 300 },
        { name: 'Taxi', value: 200 },
        { name: 'Train', value: 278 },
        { name: 'Ambulance', value: 189 },
      ];
      
    return (
        <div>
{/* portfolio download */}
          <div>
          <Card className="text-black m-5">
  <Card.Img src="https://www.sumitomocorp.com/jp/-/media/Images/hq/about/message/message-main_2021a.jpg?h=1080&la=en&w=1920" alt="Card image" />
  <Card.ImgOverlay className="text-center mt-5 p-5 text-success"> 
    <Card.Title>Welcome to Safe Driving</Card.Title>
    <Card.Text>
    <Button className="mt-3" variant="outline-info">Download Portfolio</Button>{' '}
    </Card.Text>
    <Card.Text>Learning Everyday</Card.Text>
  </Card.ImgOverlay>
</Card>
          </div>

{/* chart start */}
<div>
<h1 className="text-center text-success">Our Successes</h1>
        <PieChart className="mx-auto" width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label="name"
          />
          <Tooltip />
        </PieChart>
      
</div>
<div>
<h1 className="text-center text-success">Our Instructors</h1>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>
        </div>
    );
};

export default Portfolio;