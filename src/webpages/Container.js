import "../styles/Container.css"
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import Simulation from "./simulation";
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
            <canvas id="canvas"></canvas>
        </div>
    )
}

function Quiz() {

    return (
        <><div className="box" id="quiz">

            <div className="title">
                <h2>QUIZ</h2>
            </div>
            <div>
                <div className="start_btn"><button style={{ backgroundColor: "#007bff", color: "white" }}>Start Quiz</button></div>

                <div className="info_box">
                    <div className="info-title"><span>Some Rules of this Quiz</span></div>
                    <div className="info-list">
                        <div className="info">1. You will have only <span style={{ color: "black" }}>15 seconds</span> per each question.</div>
                        <div className="info">2. Once you select your answer, it can't be undone.</div>
                        <div className="info">3. You can't select any option once time goes off.</div>
                        <div className="info">4. You can't exit from the Quiz while you're playing.</div>
                        <div className="info">5. You'll get points on the basis of your correct answers.</div>
                    </div>
                    <div className="buttons">
                        <button className="quit">Exit Quiz</button>
                        <button className="restart">Continue</button>
                    </div>
                </div>
                <div className="quiz_box">
                    <header>
                        <div className="title">Awesome Quiz Application</div>
                        <div className="timer">
                            <div className="time_left_txt">Time Left</div>
                            <div className="timer_sec">15</div>
                        </div>
                        <div className="time_line"></div>
                    </header>
                    <section>
                        <div className="que_text">
                            {/* < />!-- Here I've inserted question from JavaScript --> */}
                        </div>
                        <div className="option_list">
                            {/* < />!-- Here I've inserted options from JavaScript --> */}
                        </div>
                    </section>
                    {/* < />!-- footer of Quiz Box --> */}
                    <footer>
                        <div className="total_que">
                            {/* < />!-- Here I've inserted Question Count Number from JavaScript --> */}
                        </div>
                        <button className="next_btn">Next Que</button>
                    </footer>
                </div>
                <div className="result_box">
                    <div className="icon">
                        <i className="fas fa-crown"></i>
                    </div>
                    <div className="complete_text">You've completed the Quiz!</div>
                    <div className="score_text">
                        {/* < />!-- Here I've inserted Score Result from JavaScript --> */}
                    </div>
                    <div className="buttons">
                        <button className="restart">Replay Quiz</button>
                        <button className="quit">Quit Quiz</button>
                    </div>
                </div>
                {/* < />!-- Inside this JavaScript file I've inserted Questions and Options only --> */}
                <script src="./quiz/questions.js"></script>
                {/* < />!-- Inside this JavaScript file I've coded all Quiz Codes --> */}
                <script src="./quiz/script.js"></script>
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
                    <p className="desc">Simulated Hamming Code</p>
                </div>
            </div>
        <div className="box">
            <div className="title" id="references">
                <h2 className="heading">References</h2><br />
                <ol >
                    <li className="desc">https://en.wikipedia.org/wiki/Hamming_code</li><br />
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