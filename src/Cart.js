import { useState, useEffect } from "react"
import { Link, Route, Switch } from 'react-router-dom';
import Item from './Item';
import Data from './data';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cart = () => {
  //console.log(state);
  const cart =  JSON.parse(localStorage.getItem("cart")) || []
  //let [shoes, shoesState] = useState(cart);
  //let [shoes, shoesState] = useState(Data);

  const dataInfo = [];
  for (let i = 0; i < cart.length; i++) {
    //dataInfo.push(Data.filter(val => val.id == cart[i]));
    const tmp = Data.filter((val, idx) => {
      if (val.id == cart[i]) {
        dataInfo[i] = val;
      }
    });
    console.log(tmp);
    //dataInfo.concat(tmp);
    Object.assign({}, dataInfo, tmp);
    //dataInfo = {}
  }

  const [shoes, shoesState] = useState(dataInfo);

  console.log(shoes);

  return (
    <Container className="contents" style={{ textAlign: "center" }}>
      <Row className="justify-content-md-center">
        {shoes.map((data, i) => {
          return (
            <Link to={'/detail/' + data.id}>
              <Item shoes={data} i={i} key={i} />
            </Link>
          );
        })}
      </Row>
    </Container>

    /* <Container className="contents" style={{ textAlign: "center" }}>
      <Row className="justify-content-md-center">
        {shoes.map((data, i) => (
          <Link to={'/detail/' + data.id}>
            <Item shoes={data} i={i} key={i} />
          </Link>
        ))}
      </Row>
    </Container> */
  );
}
export default Cart;