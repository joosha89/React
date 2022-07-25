/* import React, { useEffect } from 'react'; */
import React from 'react';
import Col from "react-bootstrap/Col";

const Item = (props) => {
  return (
    <Col className="item" style={{ display: 'inline-block', width: '37vh' }}>
      <img src={process.env.PUBLIC_URL+"/"+props.shoes.img} alt=""/>
      <div style={{ marginTop: "2vh", color: "white" }}>
        <h4 style={{ marginBottom: "0px" }}>{props.shoes.title}</h4>
        <p style={{ marginBottom: "0px" }}>{props.shoes.content}</p>
        <p>{props.shoes.price} ₩(KRW)</p>
      </div>
    </Col>
  );
}

export default Item;