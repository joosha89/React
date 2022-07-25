import React, { useState } from 'react';
import Cart from './Cart';
import Data from './data';
import Item from './Item';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, Route, Switch } from 'react-router-dom';
import "./List.css";

const List = (props) => {
  return (
    <Container className="contents" style={{ textAlign: "center" }}>
      <Row className="justify-content-md-center" style={{ justifyContent: "center!important" }}>
        {props["shoes"].map((data) => (
          <Link to={'/detail/' + data.id}>
            {/* <Item shoes={data} i={i} key={i} /> */}
            <Item shoes={data} />
          </Link>
        ))}
      </Row>
    </Container>
  );
}
export default List;