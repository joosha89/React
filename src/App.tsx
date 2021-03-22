import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Button,  Navbar,  Nav,  Jumbotron,  Form,  FormControl} from 'react-bootstrap';
import Detail from './Detail';
import Cart from './Cart';
import Data from './data';


//import './App.css';
/* import {Button, Progress} from 'semantic-ui-react'; */

const App: React.FunctionComponent = () => {
  let [shoes, shoesState] = useState(Data);
  let [cartItem, cartItemState] = useState(0);

  return (
    <>
      <Navbar bg="dark" variant="dark">
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
          <Jumbotron></Jumbotron>
          <div className="">
            {shoes.map((num, i) => {
              return (
                <Link to={'/detail/' + i}>
                  <Item shoes={num} i={i} key={i} />;
                </Link>
              );
            })}
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes}></Detail>
        </Route>

        <Route path="/cart/">
          {/* <Cart></Cart> */}
        </Route>
      </Switch>
    </>
  );
}

function Item(props: any) {
  return (
    <div className="item" style={{ display: 'inline-block', width: '40vh' }}>
      <img src={props.shoes.img} style={{ width: '100%' }} alt=""/>
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}


export default App;
