import React, { useEffect } from 'react';

const Item = (props: any) => {
  return (
    <div className="item" style={{ display: 'inline-block', width: '40vh' }}>
      <img src={props.shoes.img} style={{ width: '100%' }} alt=""/>
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}

export default Item;