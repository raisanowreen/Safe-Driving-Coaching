import React from 'react';

const Service = (props) => {
    const {img, name, price, instructor} =props.service;
    return (  
      <div class="col">
      <div class="card p-3 w-75 mx-auto h-100">
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body p-4">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Instructor: {instructor}</p>
          <p class="card-text">${price}</p>
        </div>
      </div>
    </div>
  
     
    );
};

export default Service;