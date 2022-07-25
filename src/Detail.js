//import React, { useEffect, useRef, useState } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
//import { Cart } from './Cart';
//import UseLocalStorage from 'components/useLocalStorage';
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Detail.css';

import { useAlert, withAlert } from "react-alert"

const StyledButton = styled.button`
  margin-right: 1vh
`;

const tabsInfo = [
  {
    id: 0,
    name: "상세정보",
    content:
      "상세정보입니다."
  },
  {
    id: 1,
    name: "리뷰",
    content:
      "리뷰입니다."
  },
  {
    id: 2,
    name: "Q&A",
    content:
      "Q&A입니다."
  },
  {
    id: 3,
    name: "반품/교환정보",
    content:
      "반품/교환정보입니다."
  }
];

const Detail = (props) => {
  //let history = useHistory();
  let { id } = useParams();
  let searchItem = props.shoes.find((item) => {
    return item.id == id;
  });

  const data =  JSON.parse(localStorage.getItem("cart")) || [];

  const alert = useAlert();

  const setOrder = () => {
    alert.error("아직 미구현이야 돌아가.");
  }

  const setCart = (type) => {
    const dataInfo = data.filter(dataId => dataId != searchItem.id);

    /*
      0: 2  data.js id값
      1: 5
    */
    if (type == "set") {
      dataInfo.push(searchItem.id);

      alert.success("장바구니에 담았습니다.");
      //alert("장바구니에 담았습니다.");
      //setIsCart(<StyledButton onClick={() => setCart("del") } className="btn btn-danger">장바구니 삭제</StyledButton>);
      setIsCart("Y");
    } else {
      alert.success("장바구니에서<br>삭제되었습니다.");
      //setIsCart(<StyledButton onClick={() => setCart("set") } className="btn btn-primary">장바구니 담기</StyledButton>);
      setIsCart("N");
    }

    localStorage.setItem("cart", JSON.stringify(dataInfo));

    //cartStat();


    console.log(type);
    /* useEffect(() => {
      window.localStorage.setItem("cart", JSON.stringify(searchItem.id))
    }, [searchItem.id]); */
    //const aa = JSON.stringify(1) ;

    //const [cartId, setCartId] = UseLocalStorage(cartId, true);
    //console.log(searchItem.id);
    //console.log(cartId);
  }

  /* const getCart = () => {
    const data =  JSON.parse(localStorage.getItem("cart")) || []
    const dataInfo = data.filter(dataId => dataId != searchItem.id);
  } */



  //const { tabId, setTabId } = useTabs(0, data);
  const [tabId, setTabId] = useState(0, tabsInfo);

  //let cartButton = <StyledButton onClick={() => setCart("set") } className="btn btn-primary">장바구니 담기</StyledButton>;
  let cartButton = "N";
  data.some(cartId => {
    if (cartId == id) {
      cartButton = "Y";
      return false;
    }
  });
  const [isCart, setIsCart] = useState(cartButton);

  return (
    <Container className="detail_wrap">
      <Row>
        <Col sm={6}><img src={process.env.PUBLIC_URL+"/"+searchItem.img} style={{ width: '70%' }} /></Col>
        <Col sm={6}>
          <div className="info">
            <h4>{searchItem.title}</h4>
            <p>{searchItem.content}</p>
            <p>{searchItem.price} ₩(KRW)</p>

            <div className="action">
              <StyledButton className="btn btn-success" onClick={ () => setOrder() }>주문하기</StyledButton>
              {/* {id != searchItem.id ? <StyledButton onClick={() => setCart() } className="btn btn-primary">장바구니 담기</StyledButton> : "장바구니에 있음"} */}
              {/* {isCart} */}
              {
                {
                "Y": <StyledButton onClick={() => setCart("del") } className="btn btn-danger">장바구니 삭제</StyledButton>,
                "N": <StyledButton onClick={() => setCart("set") } className="btn btn-primary">장바구니 담기</StyledButton>
                }[isCart]
              }
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center tab">
        {tabsInfo.map((data) => (
          <Col className={tabId === data.id ? "on" : ""} onClick={() => setTabId(data.id)}>{data.name}</Col>
        ))}
      </Row>
      <Row className="justify-content-md-center contents">
        <Col md="auto">
          {tabsInfo[tabId].content}
        </Col>
      </Row>
    </Container>
  );
}
//export default withAlert()(Detail);
export default Detail;