import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Button,  Navbar,  Nav,  Jumbotron,  Form,  FormControl} from 'react-bootstrap';
import Detail from './Detail';
import Cart from './Cart';
import Data from './data';
import Item from './Item';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './App.css';

const App: React.FunctionComponent = () => {
  let [shoes, shoesState] = useState(Data);
  let [cartItem, cartItemState] = useState(0);

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{marginBottom: "50px"}}>
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/cart">CART</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Switch>
        <Route exact path="/">
          {/* <Jumbotron></Jumbotron> */}
          <Container className="contents" style={{ textAlign: "center" }}>
            <Row className="justify-content-md-center">
              {shoes.map((num, i) => {
                return (
                  <Link to={'/detail/' + num.id}>
                    <Item shoes={num} i={i} key={i} />
                  </Link>
                );
              })}
            </Row>
          </Container>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes}></Detail>
        </Route>

        <Route path="/cart/">
          <Cart></Cart>
        </Route>
      </Switch>
    </>
  );
}




export default App;
