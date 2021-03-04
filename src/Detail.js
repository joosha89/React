import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();
  let searchItem = props.shoes.find((item) => {
    return item.id == id;
  });

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
            <button
              onClick={() => {
                history.goBack();
              }}
              className="btn btn-danger"
            >
              뒤로가기
            </button>
            <button
              onClick={() => {
                history.push('/');
              }}
              className="btn btn-danger"
            >
              뒤로가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
