import React from 'react';
//import Data from './Data';


function Main(props) {
    return (
      <div className="container">
      
      
        <h1>Name:{props.Name}</h1>
        <h3>Manufacture:{props.Manufacture}</h3>
       <h2>Price:{props.Price}</h2>
        <img src={props.imgUrl} alt=""/>
      </div>
    );
  }
  export default Main