import React, { useState } from 'react';
import Data from './data';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import {
  Button,
  Navbar,
  Nav,
  Jumbotron,
  Form,
  FormControl,
} from 'react-bootstrap';

//import './App.css';
/* import {Button, Progress} from 'semantic-ui-react'; */

function App() {
  let [shoes, shoesState] = useState(Data);

  /* function conLog() {
        console.log(shoes);
    } */

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/cart">CART</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Jumbotron></Jumbotron>
          <div className="">
            {shoes.map((num, i) => {
              return (
                <Link to={'/detail/' + i}>
                  <Card shoes={num} i={i} key={i} />;
                </Link>
              );
            })}
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes}></Detail>
        </Route>
      </Switch>
    </>
  );
}

function Card(props) {
  return (
    <div className="item" style={{ display: 'inline-block', width: '40vh' }}>
      <img src={props.shoes.img} style={{ width: '100%' }} />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}

/* function Modal() {
    return (
        <div className="modal">
            <h2>wpahr</h2>
            <p>date</p>
            <p>상세내용</p>
        </div>
    );
} */

export default App;
