import React, { useState } from 'react';
import { Link, Route, Routes, useParams, NavLink } from 'react-router-dom';
import { Button,  Navbar,  Nav, Form,  FormControl, NavDropdown, Container } from 'react-bootstrap';
import Detail from './Detail';
import Cart from './Cart';
import Data from './data';
import { Data as TypesData } from './types/data';
//import Item from './Item';
import List from './List';
import './App.css';




const App: React.FunctionComponent = () => {
  let [shoes, shoesState] = useState(Data);
  //let [cartItem, cartItemState] = useState(0);
  //let expand = "md";



  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginBottom: "20px"}}>
        <Container>
          <Navbar.Brand><Link className="nav-brand" to="/">JOOSHOP</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{margin: "auto"}}>
              <NavDropdown title="Guitar" className="nav-links" id="collasible-nav-dropdown" style={{color: "#fff", marginRight: "1rem"}}>
                <NavDropdown.Item eventKey="2.1" as={Link} to="/List/acoustic">Acoustic</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.2" as={Link} to="/List/hollow">Hollow</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.3" as={Link} to="/List/electric">Electric</NavDropdown.Item>
              </NavDropdown>
              <NavLink className="nav-link" to="/Cart">CART</NavLink>
            </Nav>

            <Form inline className="mr-auto navbar-nav">
              <FormControl type="text" placeholder="Search"/>
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/*" element={<List></List>} />
        <Route path="/List/:type" element={<List></List>} />
        <Route path="/Detail/:id" element={<Detail shoes={shoes}></Detail>} />
        <Route path="/Cart" element={<Cart></Cart>} />
      </Routes>
    </>
  );
}
export default App;