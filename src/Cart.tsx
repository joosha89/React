import { useState, useCallback } from "react"
//import { Link, Route, Switch } from 'react-router-dom';
//import Item from './Item';
import Data from './data';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Cart.css';

import { Data as TypesData } from './types/data' ;

const Cart = () => {
  //console.log(state);
  const cart =  JSON.parse(localStorage.getItem("cart") || "[]");

  const dataInfo: TypesData[] = [];
  for (let i = 0; i < cart.length; i++) {
    const tmp = Data.filter((val, idx) => {
      if (val.id === cart[i]) {
        dataInfo[i] = val;
      }
    });

    Object.assign({}, dataInfo, tmp);
  }

  const [shoes, shoesState] = useState(dataInfo);

  const [checkedList, setCheckedList] = useState<Array<number>>([]);

  const checkedAll = useCallback(
    (checked) => {
      if (checked) {
        const tmpCheckedList: Array<number> = [];

        shoes.forEach((list) => tmpCheckedList.push(list.id));

        setCheckedList(tmpCheckedList);
      } else {
        setCheckedList([]);
      }
    },
    [shoes]
  );

  const checkedElement = useCallback(
    (checked, dataId) => {
      if (checked) {
        setCheckedList([...checkedList, dataId]);
      } else {
        setCheckedList(checkedList.filter((el) => el !== dataId));
      }
    },
    [checkedList]
  );

  const initCart = () => {

  }

  return (
    <Container className="contents" style={{ textAlign: "center" }}>
      <Row className="th">
        <Col>
          <input
            type="checkbox"
            onChange={ (e) => checkedAll(e.target.checked) }
            checked={ checkedList.length === 0 ? false : checkedList.length === shoes.length ? true : false }
          />
        </Col>
        <Col>상품정보</Col>
        <Col>옵션</Col>
        <Col>상품금액</Col>
        <Col>배송비</Col>
      </Row>
      {shoes.map((data, i) => {
        return (
          <Row className="data" key={data.id}>
            <Col>
              <input
                type="checkbox"
                onChange={ (e) => checkedElement(e.target.checked, data.id) }
                checked={ checkedList.includes(data.id) ? true : false }
              />
            </Col>
            <Col><img src={process.env.PUBLIC_URL+"/"+data.img} alt=""/></Col>
            <Col>
              <h5 style={{ marginBottom: "0px" }}>{data.title}</h5>
              <p style={{ marginBottom: "0px" }}>{data.content}</p>
            </Col>
            <Col>{data.price} ₩(KRW)</Col>
            <Col>2,000 ₩(KRW)</Col>
          </Row>
        );
      })}
      <Row className="data footer">
        <Col style={{ flexGrow: 1 }}>
          <button className="btn btn-danger" onClick={ () => initCart() }>선택상품 삭제</button>
        </Col>
      </Row>
    </Container>


  );
}
export default Cart;