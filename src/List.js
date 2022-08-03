import React, { useState } from 'react';
import Cart from './Cart';
import Data from './data';
import Item from './Item';
import { Container, Dropdown } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from 'react-router-dom';
import "./List.css";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

const List = (props) => {
  let param = useParams();

  console.log(param.type);

  let html = "";

  /* props["shoes"].map((data) => (
    if (data.type == param.type) {
      html += <Link to={'/detail/' + data.id} style={{ width: "auto" }}>
        <Item shoes={data} />
      </Link>
    }


  )); */

  return (
    <Container className="contents" style={{ textAlign: "center" }}>
      <Dropdown style={{textAlign: "right"}}>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Filter
        </Dropdown.Toggle>

        <Dropdown.Menu /* as={CustomMenu} */>
          <Dropdown.Item eventKey="1">Low Price</Dropdown.Item>
          <Dropdown.Item eventKey="2">High Price</Dropdown.Item>
          <Dropdown.Item eventKey="3">Sort of Title</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="justify-content-md-center" style={{ justifyContent: "center!important" }}>
        {props["shoes"].map((data) => {
          return (
            param.type != "undefined" || data.type == param.type
            ? <Link to={'/detail/' + data.id} style={{ width: "auto" }}>
                <Item shoes={data} />
              </Link>
            : ""
          )
        })}
      </div>
    </Container>
  );
}
export default List;