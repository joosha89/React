import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { Dropdown, Form, Row, Col } from "react-bootstrap";
import { setCategory, setSortType } from './store/reducers/category';

const CATEGORY_KEY = "CATEGORY_KEY";
const SORT_KEY = "SORT_KEY";

const categories = {
  1:{
    name : "Featured",
    value : "1",
    sortName : "featured",
    sort : "desc",
  },
  2:{
    name : "Price",
    value : "2",
    sortName : "price",
    sort : "asc",
  },
  4:{
    name : "Title",
    value : "4",
    sortName : "title",
    sort : "asc",
  },
  5:{
    name : "Newest Arrivals",
    value : "5",
    sortName : "regDate",
    sort : "desc",
  }
};

const sortTypes = {
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
};

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    style={{marginRight: "1rem"}}
  >
    {children}
    <div style={{display: "inline-block", fontSize: "0.7rem", marginLeft: "0.5rem"}}> &#x25bc;</div>
  </a>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [menuValue, setMenuValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter"
          onChange={(e) => setMenuValue(e.target.value)}
          value={menuValue}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !menuValue || child.props.children.toLowerCase().startsWith(menuValue),
          )}
        </ul>
      </div>
    );
  },
);

const CategoryFilter = () => {
  let param = useParams();

  //const [category, setCatecory] = useState("1");
  //const [sortType, setSortType] = useState("1");

  /* const init = () => {
    let data = localStorage.getItem(CATEGORY_KEY);
    if (data !== null) setCatecory(data);

    let data2 = localStorage.getItem(SORT_KEY);
    if (data2 !== null) setSortType(data2);
  };

  useEffect(init, []); */

  const dispatch = useDispatch();


  const guitar = useSelector((state) => state.guitar);

  const dataInfo = guitar.filter(data => {
    if (param.type === undefined || data.type === param.type) {
      return data;
    }
  });

  const stateCategory = useSelector((state) => state.category);

  let category = stateCategory.category;
  let sortType = stateCategory.sortType;


  let sort = "";
  let sortName = "";

  Object.entries(categories).map((item, idx) => {
    if (item[1].value === category) {
      sort = item[1].sort;
      sortName = item[1].sortName;
    }
  });



  return (
    <>
      <Dropdown style={{textAlign: "right"}}>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Filter
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu}>
          {
            //categories.map((item, idx) => (
            Object.entries(categories).map((item, idx) => (
              <Dropdown.Item
                key={idx}
                eventKey={item[1].value}
                onClick={() => {
                  /* setCatecory(item[1].value);
                  localStorage.setItem(CATEGORY_KEY, item[1].value); */

                  dispatch(setCategory(item[1].value));
                }}
                active={item[1].value === category ? true : false}
              >
                {item[1].name}
              </Dropdown.Item>
            ))
          }
        </Dropdown.Menu>

        <Row style={{display: "inline-block", marginLeft: "10px"}}>
          <div className="sort_name">{categories[category]["name"]}</div>
          {
            <button
              key={sortTypes[sortType]["value"]}
              onClick={() => {
                //setSortType(sortTypes[sortType]["otherValue"]);
                //localStorage.setItem(SORT_KEY, item.value);

                dispatch(setSortType(sortTypes[sortType]["otherValue"]));
              }}
            >
              {sortTypes[sortType]["name"]}
            </button>
          }
        </Row>
      </Dropdown>


    </>
  );
};

export default CategoryFilter;