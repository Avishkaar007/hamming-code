import React, { useState ,ReactDOM} from "react";
import "../styles/simulation.css";
import App from "../HeymingApp"
export default function Simulation() {

    return (
        <div id="simulation-box" className="">
            <App />
        </div>

    );

}

// function Controls({ count, setCount }) {

//     function handleChange(e) {
//         console.log(e.target.value, "ed");
//         setCount(e.target.value);
        
//         var dwn=document.getElementById("down-arrow");
//         dwn.style.visibility="visible";
//     }

//     function handleSubmit(e) {

//         e.preventDefault();
//     }
//     return (
//         <>
//             <div className="control-container">
                
//                 <form onSubmit={handleSubmit}>
//                     <div className="line">
//                         <label>
//                             Bit Count :
//                             <input type="number" className="inputText" value={count} onChange={handleChange} />
//                         </label>
//                     </div>

//                     <div className="line">
//                         <label htmlFor="error-at">
//                             <br />
//                             Error At:<></>
//                         </label>
//                         <input type="text" id="error-at" className="inputText"></input>
//                         <input type="submit" className=" inputText" value="Go" />

//                     </div>
//                     <p 
//                     >Max Value :11</p>
//                     <p>Enter index starting from 0 at which you want to simulate error</p>

//                 </form>
//                 <></>
//             </div>
//         </>
//     );
// }

// function BitArray({ count, color ,getVal}) {
//     const initialArray = Array(11).fill(0);

//     const [binVal, setBinVal] = useState(initialArray);
    
//     function handleClick(i) {
//         let tempArr = binVal.slice();
//         let temp = (binVal[i] === 0) ? 1 : 0;
//         tempArr[i] = temp;
//         setBinVal(tempArr);
//         getVal(tempArr);
//     }
//     let arr;
    
//     if (count < 12) {
//         arr = Array.from({ length: count }, (_, index) => { return (<button key={index} className="bit" onClick={() => { handleClick(index) }} >{binVal[index]}</button>) });
//     }
//     else {
//         alert("Maximum Bits allowed is 11");
//         window.location.reload(true);

//     }
//     let colour = (color === undefined) ? "" : "red";
//     return (
//         <div className={"simulation-area " + colour} >
//             <style>
//                 {`  
//                     .wrapper{
//                         background-color:pink;
//                     }
//                     .red .bit {
                        
//                         background-color:red;
//                     }
//                     .red{
//                         margin:0;
//                         margin-top:20px;
//                     }
                
//                 `}
//             </style>
            
//             {arr}
//             </div>
//     )
// }
// function Main() {
//     const [count, setCount] = useState(0);
//     // const error_at=document.getElementById("error-at").value;
//     const [inputArr,setInputArr]=useState([]);
//     const [outputArr,setOutputArr]=useState([]);
    

//     return (
//         <div className="main-area">
//             <div className="simulation">

//                 <BitArray count={count} getVal={setInputArr} />
//                 <h1 id="down-arrow" style={{"visibility":"hidden"}}>↓</h1>
//                 <BitArray count={count} color="red" getVal={setOutputArr} />

//             </div>
//             <div className="">
//                 <Controls count={count} setCount={setCount} />
//             </div>
            
//         </div>
//     );
// }
