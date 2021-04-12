import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Cart } from './Cart';
import UseLocalStorage from 'components/useLocalStorage';

const Detail = (props) => {
  let history = useHistory();
  let { id } = useParams();
  let searchItem = props.shoes.find((item) => {
    return item.id == id;
  });

  //const [cartId, setCartId] = UseLocalStorage(searchItem.id, true);

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
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={searchItem.img} style={{ width: '100%' }} />

          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{searchItem.title}</h4>
            <p>{searchItem.content}</p>
            <p>{searchItem.price}</p>
            <button className="btn btn-danger">주문하기</button>
            <button onClick={() => setCart() } className="btn btn-warning">카트담기</button>
            <button onClick={() => { history.push('/'); }} className="btn btn-danger">뒤로가기</button>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Detail;

