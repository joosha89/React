import { useState, useEffect } from "react"
import { Link, Route, Switch } from 'react-router-dom';
import Item from './Item';
import Data from './data';

const Cart = () => {
  //console.log(state);
  const cart =  JSON.parse(localStorage.getItem("cart")) || []
  let [shoes, shoesState] = useState(Data);
  //let [shoes, shoesState] = useState(Data);

  console.log(shoes);

  return (
    <div className="m-auto">
      {shoes.map((num, i) => {
        return (
          <Link to={'/detail/' + i}>
            <Item shoes={num} i={i} key={i} />;
          </Link>
        );
      })}
    </div>
  );

}
export default Cart;