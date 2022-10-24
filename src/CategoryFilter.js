import React, { useState, useEffect } from 'react';
import { Dropdown, Form, Row, Col } from "react-bootstrap";

const CATEGORY_KEY = "CATEGORY_KEY";
const SORT_KEY = "SORT_KEY";

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

const CategoryFilter = ({ categories, category, setCatecory, sortTypes, sortType, setSortType }) => {
  const init = () => {
    let data = localStorage.getItem(CATEGORY_KEY);
    if (data !== null) setCatecory(data);

    let data2 = localStorage.getItem(SORT_KEY);
    if (data2 !== null) setSortType(data2);
  };

  useEffect(init, []);

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
                  setCatecory(item[1].value);
                  localStorage.setItem(CATEGORY_KEY, item[1].value);
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
                setSortType(sortTypes[sortType]["otherValue"]);
                //localStorage.setItem(SORT_KEY, item.value);
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