import React, { useEffect } from 'react';
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
    const Data =  JSON.parse(localStorage.getItem("cart")) || []

    console.log(Data);


    Data.push(searchItem.id);

    localStorage.setItem("cart", JSON.stringify(Data));
    /* useEffect(() => {
      window.localStorage.setItem("cart", JSON.stringify(searchItem.id))
    }, [searchItem.id]); */
    //const aa = JSON.stringify(1) ;

    //const [cartId, setCartId] = UseLocalStorage(cartId, true);
    //console.log(searchItem.id);
    //console.log(cartId);
  }

  return (
    <Container className="detail_wrap">
      <Row>
        <Col sm={6}><img src={process.env.PUBLIC_URL+"/"+searchItem.img} style={{ width: '100%' }} /></Col>
        <Col sm={6}>
          <div className="info">
            <h4>{searchItem.title}</h4>
            <p>{searchItem.content}</p>
            <p>{searchItem.price} ₩(KRW)</p>

            <div className="action">
              <StyledButton className="btn btn-success" onClick={ () => setOrder() }>주문하기</StyledButton>
              <StyledButton onClick={() => setCart() } className="btn btn-primary">카트담기</StyledButton>
              <StyledButton onClick={() => { history.push('/'); }} className="btn btn-danger">뒤로가기</StyledButton>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center tab">
        <Col>상세정보</Col>
        <Col>리뷰</Col>
        <Col>Q&A</Col>
        <Col>반품/교환정보</Col>
      </Row>
      <Row className="justify-content-md-center contents">
        <Col md="auto">contents section</Col>
      </Row>
    </Container>
  );
}



export default Detail;