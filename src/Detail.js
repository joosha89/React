import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Cart } from './Cart';

const Detail = (props) => {
  let history = useHistory();
  let { id } = useParams();
  let searchItem = props.shoes.find((item) => {
    return item.id == id;
  });

  const setCart = () => {

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={searchItem.img} style={{ width: '100%' }} />

          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{searchItem.title}</h4>
            <p>{searchItem.content}</p>
            <p>{searchItem.price}</p>
            <button className="btn btn-danger">주문하기</button>
            <button onClick={() => {setCart();} } className="btn btn-warning">카트담기</button>
            <button onClick={() => { history.push('/'); }} className="btn btn-danger">뒤로가기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
