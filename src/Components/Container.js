import "../styles/Container.css"
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { ReactDOM } from "react";
import Simulation from "./simulation.js";
function Aim() {
    return (<div className="box" id="aim">
        <div className="title">
            <h2 className="heading">Aim</h2>
        </div>
        <div className="desc1">
            <p className="desc">To Simulate Hamming Code </p>
        </div>
    </div>)
}
function Theory() {

    
    return (
        <div className="box" id="theory">
            <div className="title">
                <h2 className="heading">Theory</h2>
            </div>
            <div className="desc">Hamming code is a set of error-correction codes that can be used to detect and correct the errors that can occur when the data is moved or stored from the sender to the receiver. It is a technique developed by R.W. Hamming for error correction. Redundant bits – Redundant bits are extra binary bits that are generated and added to the information-carrying bits of data transfer to ensure that no bits were lost during the data transfer. The number of redundant bits can be calculated using the following formula:

                2^r ≥ m + r + 1
                where, r = redundant bit, m = data bit</div>
        </div>
    )
}
function Procedure() {
    return (<div className="box" id="procedure">
        <div className="title">
            <h2 className="heading">Procedure</h2>
        </div>
        <div className="desc1">
            <p className="desc">Steps to follow are as follows:</p>
            <ol className="desc" >

                <li>Click on the simulation tab.</li>
                <li>Read the code.</li>

                <li>Click submit to get the output.</li>

            </ol><br />
        </div>
    </div>)
}

function Practice() {
    const handle = useFullScreenHandle();

    return (
        <div className="box" id="practice">
            <div className="title">
                <h2 className="heading">Practice</h2>
            </div>
            <br />
            <div className="line">
                <button onClick={handle.enter} id="goFullScreen">
                    ⛶
                </button>
            </div>
            <br/>

            <FullScreen handle={handle}>
                <Simulation />
            </FullScreen>

        </div>
    )
}

function Code() {
    return (
        <div className="box" id="code">
            <div className="title">
                <h2 className="heading">Code</h2>
            </div>
            <br></br>
            <iframe
                frameBorder="0"
                height="450px"
                src="https://onecompiler.com/embed/python/3zguv6dxs?hideLanguageSelection=true&theme=dark&hideNew=true&hideNewFileOption=true"
                width="100%"
            ></iframe>
        </div>
    )
}

function Quiz() {

    return (
        <><div className="box" id="quiz">

            <div className="title">
                <h2>QUIZ</h2>
            </div>

        </div></>
    )
}

function Result() {
    return (
        <>
        <div className="box" id="Result">
                <div className="title">
                    <h2 className="heading">Result</h2>
                </div>
                <div className="desc1" >
                    <p className="desc">We have successfully simulated Hamming Code . </p>
                </div>
            </div>
        <div className="box">
            <div className="title" id="references">
                <h2 className="heading">References</h2><br />
                <ol >
                    <li className="desc">
                        <a href="https://en.wikipedia.org/wiki/Hamming_code">https://en.wikipedia.org/wiki/Hamming_code</a>
                        </li><br />
                </ol>
            </div>
            <div className="desc1">

            </div>
        </div>
        </>
    )
}
function Container() {
    return (
        <div className="container">
            <Aim />
            <Theory />
            <Procedure />
            <Practice />
            <Code />
            <Quiz />
            <Result />
        </div>
    )
}
export default Container;