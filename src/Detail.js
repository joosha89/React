import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Cart } from './Cart';
import UseLocalStorage from 'components/useLocalStorage';
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailStyles from './Detail.css';

const StyledButton = styled.button`
  margin-right: 1vh
`;

const tabsInfo = [
  {
    name: "상세정보",
    content:
      "상세정보입니다."
  },
  {
    name: "리뷰",
    content:
      "리뷰입니다."
  },
  {
    name: "Q&A",
    content:
      "Q&A입니다."
  },
  {
    name: "반품/교환정보",
    content:
      "반품/교환정보입니다."
  }
];

const Detail = (props) => {
  let history = useHistory();
  let { id } = useParams();
  let searchItem = props.shoes.find((item) => {
    return item.id == id;
  });

  //const [cartId, setCartId] = UseLocalStorage(searchItem.id, true);

  const setOrder = () => {
    alert("아직 미구현이야 돌아가.");
  }

  const setCart = () => {
    const data =  JSON.parse(localStorage.getItem("cart")) || []

    const dataInfo = data.filter(dataId => dataId != searchItem.id);

    /*
      0: 2  data.js id값
      1: 5
    */
    dataInfo.push(searchItem.id);

    localStorage.setItem("cart", JSON.stringify(dataInfo));
    /* useEffect(() => {
      window.localStorage.setItem("cart", JSON.stringify(searchItem.id))
    }, [searchItem.id]); */
    //const aa = JSON.stringify(1) ;

    //const [cartId, setCartId] = UseLocalStorage(cartId, true);
    //console.log(searchItem.id);
    //console.log(cartId);
  }

  //const nameTab = useRef();

  const tabOn = e => {
    const {value, name} = e.target;
    console.log(e.target);

  }

  //const { tabId, setTabId } = useTabs(0, data);
  const [tabId, setTabId] = useState(0, tabsInfo);

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
              <StyledButton onClick={() => setCart() } className="btn btn-primary">장바구니 담기</StyledButton>
              {/* <StyledButton onClick={() => { history.push('/'); }} className="btn btn-danger">뒤로가기</StyledButton> */}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center tab">
        {tabsInfo.map((data, i) => (
          <Col className={tabId === i ? "on" : ""} onClick={() => setTabId(i)}>{data.name}</Col>
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