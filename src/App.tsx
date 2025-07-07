import React, { useState } from 'react';
import { Link, Route, Routes, useParams, NavLink } from 'react-router-dom';
//import { Button,  Navbar,  Nav, Form,  FormControl, NavDropdown, Container } from 'react-bootstrap';
/* import Detail from './Detail';
import Cart from './Cart';
import Data from './data'; */
//import { Data as TypesData } from './types/data';
//import List from './List';
import './App.css';

//import { useQuery } from '@tanstack/react-query';

import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

// 데이터를 가져오는 함수
async function getGuitar() {
  const response = await fetch('/dump/guitar.json');
  //const response = await fetch('https://api.example.com/shoes');
  console.log(2);
  console.log(response);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// ShoesList 컴포넌트
function GuitarList() {
  console.log(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ['guitar'],
    queryFn: getGuitar/* ,
    cacheTime: 0  */
  });
  //const { data, isLoading, error } = useQuery('shoes', fetchShoes);

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {/* {data.map((shoe: any, index: number) => (
        <li key={index}>{shoe.name}</li>
      ))} */}
    </ul>
  );
}




const App = () => {
  //let [shoes, shoesState] = useState(Data);


  console.log("App.tsx 렌더링");

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GuitarList />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>

        {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginBottom: "20px"}}>
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

              <Form className="mr-auto navbar-nav">
                <FormControl type="text" placeholder="Search"/>
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}

        {/* <Routes>
          <Route path="/*" element={<List></List>} />
          <Route path="/List/:type" element={<List></List>} />
          <Route path="/Detail/:id" element={<Detail shoes={shoes}></Detail>} />
          <Route path="/Cart" element={<Cart></Cart>} />
        </Routes> */}
    </div>
  );
}
export default App;