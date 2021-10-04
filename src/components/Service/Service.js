import React from 'react';

const Service = (props) => {
  // loading dynamic data from props & destructuring
    const {img, name, price, instructor} =props.service;
    return ( 
      // displaying data 
      <div>
 <div class="col">
      <div class="card p-3 w-75 mx-auto h-100">
        <img src={img} class="card-img-top" alt="courses"/>
        <div class="card-body p-4">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Instructor: {instructor}</p>
          <p class="card-text">${price}</p>
        </div>
      </div>
    </div>
      </div>
     
    );
};

export default Service;