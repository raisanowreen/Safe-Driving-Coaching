import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <div>
      <div class="row row-cols-1 row-cols-md-2 m-0 gy-5">
{
    services.map(service => <Service service={service}></Service> )
}
 
      </div>
</div>
    );
};

export default Services;