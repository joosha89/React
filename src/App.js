import React, {useState} from "react";
import Data from "./data";

//import './App.css';
/* import {Button, Progress} from 'semantic-ui-react'; */


function App() {
    let [shoes, shoesState] = useState(Data);
    {/* let [title, titleFn] = useState(["용인", "수지", "죽전"]);
    let [best, setBestFn] = useState(0); */}

    /* function updateState() {
        let arr = [...title];
        arr[3] = "기흥";

        titleFn = arr;
        console.log(arr);
    } */

    function conLog() {
        console.log(shoes);
    }

    return (
        <div className="App">
            <button onClick={conLog()}>conLog</button>

            <div className="row">
                {shoes.map((num, i) => {
                    return <Card shoes={num} i={i} key={i} />;
                })}
            </div>
        </div>
    );
}

function Card(props) {
    console.log(props);
    return (
        <div className="col-md-4">
            <img src={props.shoes.img} width="100%" />
            <h4>{props.shoes.title}</h4>
            <p>
                {props.shoes.content} &{props.shoes.price}
            </p>
        </div>
    );
}

/* function Modal() {
    return (
        <div className="modal">
            <h2>wpahr</h2>
            <p>date</p>
            <p>상세내용</p>
        </div>
    );
} */

export default App;
