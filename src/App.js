import React, {useState} from "react";
import './App.css';
import {Button, Progress} from 'semantic-ui-react';


function App() {
    {/* let [title, titleFn] = useState(["용인", "수지", "죽전"]);
    let [best, setBestFn] = useState(0); */}

    /* function updateState() {
        let arr = [...title];
        arr[3] = "기흥";

        titleFn = arr;
        console.log(arr);
    } */

    return (
        <div className="App">
            {/* <button onClick={() => { updateState() }}>제목바꾸기</button>
            <div className="nav">
                <div>{title[0]}</div> <button onClick={() => { setBestFn(best + 1) }}>👍</button> <div>{best}</div>
            </div>

            <Modal/> */}
            <Button onClick={ ()=>{ alert("어 f삐용"); } }>눌러보세요!</Button>
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
