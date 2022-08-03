import React, { useState } from 'react';
import { Link, Route, Routes, useParams, NavLink } from 'react-router-dom';
import { Button,  Navbar,  Nav, Form,  FormControl, NavDropdown, Container } from 'react-bootstrap';
import Detail from './Detail';
import Cart from './Cart';
import Data from './data';
//import Item from './Item';
import List from './List';
/* import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; */
import './App.css';

const App: React.FunctionComponent = () => {
  let [shoes, shoesState] = useState(Data);
  //let [cartItem, cartItemState] = useState(0);
  let expand = "md";



  return (
    <>


      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginBottom: "20px"}}>
        <Container>
          <Navbar.Brand /* href="/" */><Link to="/">JOOSHOP</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{margin: "auto"}}>
              <NavDropdown title="Guitar" id="collasible-nav-dropdown" style={{color: "#fff", marginRight: "1rem"}}>
                {/* <NavDropdown.Item eventKey="2.1" href="#/List/acoustic">Acoustic</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.2" href="#/List/hollow">Hollow</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.3" href="#/List/electric">Electric</NavDropdown.Item> */}
                {/* <NavDropdown.Item eventKey="2.3" as={Link} to="/List/electric">Electric</NavDropdown.Item> */}
                <NavDropdown.Item eventKey="2.1" as={Link} to="/List/acoustic">Acoustic</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.2" as={Link} to="/List/hollow">Hollow</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.3" as={Link} to="/List/electric">Electric</NavDropdown.Item>
              </NavDropdown>
              <NavLink className="nav-link" to="/Cart">CART{/* <Link to="/Cart">CART</Link> */}</NavLink>
            </Nav>

            <Form inline className="mr-auto navbar-nav">
              <FormControl type="text" placeholder="Search"/>
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/*" element={<List shoes={shoes}></List>} />
        <Route path="/List/:type" element={<List shoes={shoes}></List>} />
        <Route path="/Detail/:id" element={<Detail shoes={shoes}></Detail>} />
        <Route path="/Cart" element={<Cart></Cart>} />

        {/* <Route path="/*">
          <List shoes={shoes}></List>
        </Route>

        <Route path="/List/:type">
          <List shoes={shoes}></List>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes}></Detail>
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route> */}
      </Routes>
    </>
  );
}
export default App;