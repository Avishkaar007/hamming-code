import React, { useState } from "react";
import "../styles/simulation.css";

export default function Simulation() {

    return (
        <div id="simulation-box">
            <Main />
        </div>
    );

}
function Controls({ count, setCount }) {

    function handleChange(e) {
        console.log(e.target.value, "ed");
        setCount(e.target.value);
        
        var dwn=document.getElementById("down-arrow");
        dwn.style.visibility="visible";
    }

    function handleSubmit(e) {

        e.preventDefault();
    }
    return (
        <>
            <div className="control-container">
                
                <form onSubmit={handleSubmit}>
                    <div className="line">
                        <label>
                            Bit Count :
                            <input type="number" className="inputText" value={count} onChange={handleChange} />
                        </label>
                    </div>

                    <div className="line">
                        <label htmlFor="error-at">
                            <br />
                            Error At:<></>
                        </label>
                        <input type="text" id="error-at" className="inputText"></input>
                        <input type="submit" className=" inputText" value="Go" />

                    </div>
                    <p 
                    >Max Value :11</p>
                    <p>Enter index starting from 0 at which you want to simulate error</p>
                </form>
                <></>
            </div>
        </>
    );
}

function Bits({ count, color }) {
    const [binVal, setBinVal] = useState(Array(count).fill(0));

    let cnt = count;
    
    function handleClick(i) {

        let tempArr = binVal.slice();
        let temp = (binVal[i] === 0) ? 1 : 0;
        tempArr[i] = temp;
        setBinVal(tempArr);
    }
    let arr;
    if (count < 12) {
        arr = Array.from({ length: cnt }, (_, index) => { return (<button key={index} className="bit" onClick={() => { handleClick(index) }} >{binVal[index]}</button>) });

        // console.log(arr, { count });
    }
    else {
        alert("Maximum Bits allowed is 11");
        window.location.reload(true);

    }
    let colour = (color == undefined) ? "" : "red";
    return (
        <div className={"simulation-area " + colour} >
            <style>
                {`  
                    .wrapper{
                        background-color:pink;
                    }
                    .red .bit {
                        
                        background-color:red;
                    }
                    .red{
                        margin:0;
                    }
                
                `}
            </style>
            {arr}</div>
    )
}
function Main() {
    const [count, setCount] = useState(0);

    return (
        <div className="main-area">
            <div className="simulation">

                <Bits count={count} />
                <h1 id="down-arrow" style={{"visibility":"hidden"}}>↓</h1>
                <Bits count={count} color="red" />

            </div>
            <div className="">
                <Controls count={count} setCount={setCount} />

            </div>
        </div>
    );
}