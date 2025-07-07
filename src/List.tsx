import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';

import Item from './Item';
import CategoryFilter from './CategoryFilter';
import { Container, Dropdown, Form } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
import "./List.css";
import { filterList } from './store/reducers/guitar';

import { setCategory, setSortType } from './store/reducers/category';

import { Data as TypesData } from './types/data' ;

import { useAppSelector, useAppDispatch } from './store/hooks';


const List = () => {
  let param = useParams();

  //const stateGuitar = useSelector((state: RootState) => state.guitar);
  const stateGuitar = useAppSelector((state) => state.guitar);

  //console.log(stateGuitar);

  const dataInfo = stateGuitar.filter(data => {
    if (param.type === undefined || data.type === param.type) {
      return data;
    }
  });

  //const dataInfo = stateGuitar.filter((data: TypesData) => data !== searchItem?.id);

  //const stateCategory = useSelector((state) => state.category);
  const stateCategory = useAppSelector((state) => state.category);

  let category = Number(stateCategory.category);
  let sortType = Number(stateCategory.sortType);
  let categorySortName = stateCategory.categorySortName;

  dataInfo.sort(function (a: TypesData, b: TypesData): any {
    let val1 = 0;
    let val2 = 0;

    if (category !== 4 && category !== 5) {
      val1 = Number(String(a[`${categorySortName}`]).replaceAll(',', ''));
      val2 = Number(String(b[`${categorySortName}`]).replaceAll(',', ''));
    } else {
      val1 = a[`${categorySortName}`];
      val2 = b[`${categorySortName}`];
    }

    if (category === 5) {
      let val1Date = +new Date(val1);
      let val2Date = +new Date(val2);

      if (sortType === 2) {
        //return new Date(val2) - new Date(val1);

        return val2Date - val1Date;
      } else {
        //return new Date(val1) - new Date(val2);

        return val1Date - val2Date;
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
        {/* {dataInfo.map((data) => {
          return (
            param.type === undefined || data.type === param.type
            ? <Link key={data.id} to={'/detail/' + data.id} style={{ width: "auto" }}>
                <Item shoes={data} />
              </Link>
            : ""
          )
        })} */}

        {dataInfo.map((data) => {
          return (
            <Link key={data.id} to={'/detail/' + data.id} style={{ width: "auto" }}>
              <Item shoes={data} />
            </Link>
          )
        })}
      </div>
    </Container>
  );
}
export default List;