import React, { useState } from 'react';
import Cart from './Cart';
import Data from './data';
import Item from './Item';
import CategoryFilter from './CategoryFilter';
import { Container, Dropdown, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from 'react-router-dom';
import "./List.css";




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

/* const categories = [
  {
    name : "Featured",
    value : "1",
    sortName : "featured",
    sort : "desc",
  },
  {
    name : "Price",
    value : "2",
    sortName : "price",
    sort : "asc",
  },
  {
    name : "Title",
    value : "4",
    sortName : "title",
    sort : "asc",
  },
  {
    name : "Newest Arrivals",
    value : "5",
    sortName : "regDate",
    sort : "desc",
  }
]; */


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


const List = (props) => {
  let param = useParams();
  const [category, setCatecory] = useState("1");
  const [sortType, setSortType] = useState("1");


  const dataInfo = props.shoes.filter(data => {
    if (param.type === undefined || data.type === param.type) {
      return data;
    }
  });


  let sort = "";
  let sortName = "";
  //categories.map((item, idx) => {
  Object.entries(categories).map((item, idx) => {
    if (item[1].value === category) {
      sort = item[1].sort;
      sortName = item[1].sortName;
    }
  });

  /* Object.entries(categories2).map((item, idx) => {
    console.log(item[1]);
    if (item.value === category) {
      sort = item.sort;
      sortName = item.sortName;
    }
  });
  return false; */

  dataInfo.sort(function (a, b) {
    let val1 = "";
    let val2 = "";


    if (category != 4 && category != 5) {
      val1 = Number(a[`${sortName}`].replaceAll(',', ''));
      val2 = Number(b[`${sortName}`].replaceAll(',', ''));
    } else {
      val1 = a[`${sortName}`];
      val2 = b[`${sortName}`];
    }


    console.log(sortName);

    if (category == 5) {
      if (sortType == 2) {
        return new Date(val2) - new Date(val1);
      } else {
        return new Date(val1) - new Date(val2);
      }
    }

    if (sortType == 2) {
      if (val1 > val2) return 1;
      if (val1 === val2) return 0;
      if (val1 < val2) return -1;

    } else {
      if (val1 < val2) return 1;
      if (val1 === val2) return 0;
      if (val1 > val2) return -1;
    }

    //return a["featured"].localeCompare(b["featured"]);
  });

  //dataInfo.sort((a, b) => a.featured.localeCompare(b.featured));


  return (
    <Container className="contents" style={{ textAlign: "center" }}>
      <CategoryFilter
        categories={categories}
        category={category}
        setCatecory={setCatecory}

        sortTypes={sortTypes}
        sortType={sortType}
        setSortType={setSortType}
      />

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