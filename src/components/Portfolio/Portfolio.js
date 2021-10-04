import React from 'react';
import { Button, Card, Tooltip } from 'react-bootstrap';
import { Pie, PieChart } from 'recharts';

const Portfolio = () => {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
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
        </PieChart>
      
</div>
        </div>
    );
};

export default Portfolio;