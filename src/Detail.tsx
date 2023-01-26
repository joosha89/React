//import React, { useEffect, useRef, useState } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
//import { Cart } from './Cart';
//import UseLocalStorage from 'components/useLocalStorage';
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Detail.css';

import { Data } from './types/data' ;

import { useAlert } from "react-alert"

const StyledButton = styled.button`
  margin-right: 1vh
`;

const tabsInfo = [
  {
    id: 0,
    name: "상세정보",
    content: "상세정보입니다."
  },
  {
    id: 1,
    name: "리뷰",
    content: "리뷰입니다."
  },
  {
    id: 2,
    name: "Q&A",
    content: "Q&A입니다."
  },
  {
    id: 3,
    name: "반품/교환정보",
    content: "반품/교환정보입니다."
  }
];

const Detail = (props: {shoes: Data[]}) => {
  //let history = useHistory();
  let id: number = Number(useParams());
  let searchItem: Data | undefined = props.shoes.find((item) => {
    return item.id === id;
  });

  const data =  JSON.parse(localStorage.getItem("cart") || "");
  /* const cartData =  localStorage.getItem("cart");
  if (!cartData) {
    throw new Error("data is null");
  }
  const data =  JSON.parse(cartData); */

  const alert = useAlert();

  const setOrder = () => {
    alert.error("아직 미구현이야 돌아가.");
  }

  const setCart = (type: string) => {
    // searchItem!.id 보단 옵셔널 체이닝으로 처리하는게 맞는 것 같다. searchItem.id 가 없을수도 있다.
    // !는 undefined가 아니라고 단언할때만 사용
    const dataInfo = data.filter((dataId: number) => dataId !== searchItem?.id);
    /* const dataInfo = data.filter(function (dataId: number) {
      return dataId !== searchItem.id;
    }); */

    /*
      0: 2  data.js id값
      1: 5
    */
    if (type === "set") {
      dataInfo.push(searchItem?.id);

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
  //const [tabId, setTabId] = useState(0, tabsInfo);
  const [tabId, setTabId] = useState(0);

  //let cartButton = <StyledButton onClick={() => setCart("set") } className="btn btn-primary">장바구니 담기</StyledButton>;
  let cartButton = "N";
  /* data.some((cartId: number): boolean | undefined => {
    if (cartId === id) {
      cartButton = "Y";
      return false;
    }
  }); */

  const isCartCheck = data.find((cartId: number) => cartId === id);
  if (isCartCheck !== undefined) {
    cartButton = "Y";
  }

  const [isCart, setIsCart] = useState(cartButton);

  /* cartButton = data.find((cartId: number) => {
    if (cartId === id) {
      setIsCart("Y");
    }
  }); */

  return (
    <Container className="detail_wrap">
      <Row style={{marginBottom: "20px"}}>
        <Col sm={6}>
          {searchItem && (<img src={process.env.PUBLIC_URL+"/"+searchItem?.img} style={{ width: '70%' }} alt="" />) }
        </Col>
        <Col sm={6}>
          <div className="info">
            {searchItem && (
              <>
                <h4>{searchItem.title}</h4>
                <p>{searchItem.content}</p>
                <p>{searchItem.price} ₩(KRW)</p>
              </>
            )}

            <div className="action">
              <StyledButton className="btn btn-success" onClick={ () => setOrder() }>주문하기</StyledButton>

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
export default Detail;