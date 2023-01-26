import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';

/* import Cart from './Cart';
import Data from './data'; */
import Item from './Item';
import CategoryFilter from './CategoryFilter';
import { Container, Dropdown, Form } from "react-bootstrap";
/* import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; */
import { Link, useParams } from 'react-router-dom';
import "./List.css";
import { filterList } from './store/reducers/guitar';

import { setCategory, setSortType } from './store/reducers/category';

import { Data as TypesData } from './types/data' ;



/* const sortTypes = {
  1: {
    name : "Asc",
    value : "1",
    otherValue : "2",
  },
  2: {
    name : "Desc",
    value : "2",
    otherValue : "1",
  }
}; */



const List = () => {
  let param = useParams();

  const stateGuitar = useSelector((state: RootState) => state.guitar);

  console.log(stateGuitar);

  const dataInfo = stateGuitar.filter(data => {
    if (param.type === undefined || data.type === param.type) {
      return data;
    }
  });

  //const dataInfo = stateGuitar.filter((data: TypesData) => data !== searchItem?.id);

  const stateCategory = useSelector((state) => state.category);

  let category = stateCategory.category;
  let sortType = stateCategory.sortType;
  let categorySortName = stateCategory.categorySortName;

  //console.log(stateCategory);


  dataInfo.sort(function (a, b) {
    //console.log(a);
    let val1 = "";
    let val2 = "";

    if (category !== 4 && category !== 5) {
      val1 = Number(String(a[`${categorySortName}`]).replaceAll(',', ''));
      val2 = Number(String(b[`${categorySortName}`]).replaceAll(',', ''));
    } else {
      val1 = a[`${categorySortName}`];
      val2 = b[`${categorySortName}`];
    }

    if (category === 5) {
      if (sortType === 2) {
        return new Date(val2) - new Date(val1);
      } else {
        return new Date(val1) - new Date(val2);
      }
    }

    if (sortType === 2) {
      if (val1 > val2) return 1;
      if (val1 === val2) return 0;
      if (val1 < val2) return -1;

    } else {
      if (val1 < val2) return 1;
      if (val1 === val2) return 0;
      if (val1 > val2) return -1;
    }
  });



  return (
    <Container className="contents" style={{ textAlign: "center" }}>
      <CategoryFilter/>

      <div className="justify-content-md-center" style={{ justifyContent: "center!important" }}>
        {dataInfo.map((data) => {
          return (
            param.type === undefined || data.type === param.type
            ? <Link key={data.id} to={'/detail/' + data.id} style={{ width: "auto" }}>
                <Item shoes={data} />
              </Link>
            : ""
          )
        })}
      </div>
    </Container>
  );
}
export default List;