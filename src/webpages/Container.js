import "../styles/Container.css"

function Aim() {
    return (<div class="box" id="aim">
        <div class="title">
            <h2 class="heading">Aim</h2>
        </div>
        <div class="desc1">
            <p class="desc">To SImulate Hamming Code </p>
        </div>
    </div>)
}
function Theory() {
    return (
        <div class="box" id="theory">
            <div class="title">
                <h2 class="heading">Theory</h2>
            </div>
            <p>Hamming code is a set of error-correction codes that can be used to detect and correct the errors that can occur when the data is moved or stored from the sender to the receiver. It is a technique developed by R.W. Hamming for error correction. Redundant bits – Redundant bits are extra binary bits that are generated and added to the information-carrying bits of data transfer to ensure that no bits were lost during the data transfer. The number of redundant bits can be calculated using the following formula:

                2^r ≥ m + r + 1
                where, r = redundant bit, m = data bit</p>
        </div>
    )
}
function Procedure() {
    return (<div class="box" id="procedure">
        <div class="title">
            <h2 class="heading">Procedure</h2>
        </div>
        <div class="desc1">
            <p class="desc">Steps to follow are as follows:</p>
            <ol class="desc" >

                <li>Click on the simulation tab.</li>
                <li>Read the code.</li>

                <li>Click submit to get the output.</li>

            </ol><br />
        </div>
    </div>)
}

function Practice() {
    return (
        <div className="box" id="practice">
            <div class="title">
                <h2 class="heading">Practice</h2>
            </div>
            <p>Lorem</p>
        </div>
    )
}

function Code() {
    return (
        <div className="box" id="code">
            <div class="title">
                <h2 class="heading">Code</h2>
            </div>
            <iframe
                frameBorder="0"
                height="450px"
                src="https://onecompiler.com/embed/python?hideLanguageSelection=true&theme=dark&hideNew=true&hideNewFileOption=true"
                width="100%"
            ></iframe>
        </div>
    )
}

// function Quiz() {
    
//     <div class="box" id="quiz">

//     <div class="title">
//         <h2>QUIZ</h2>
//     </div>
//     <div>
//         <div class="start_btn"><button style="background-color: #007bff; color: white;">Start Quiz</button></div>
       
//         <div class="info_box">
//             <div class="info-title"><span>Some Rules of this Quiz</span></div>
//             <div class="info-list">
//                 <div class="info">1. You will have only <span style="color: black;">15 seconds</span> per each question.</div>
//                 <div class="info">2. Once you select your answer, it can't be undone.</div>
//                 <div class="info">3. You can't select any option once time goes off.</div>
//                 <div class="info">4. You can't exit from the Quiz while you're playing.</div>
//                 <div class="info">5. You'll get points on the basis of your correct answers.</div>
//             </div>
//             <div class="buttons">
//                 <button class="quit">Exit Quiz</button>
//                 <button class="restart">Continue</button>
//             </div>
//         </div>
//         {/* <!-- Quiz Box --> */}
//         <div class="quiz_box">
//             <header>
//                 <div class="title">Awesome Quiz Application</div>
//                 <div class="timer">
//                     <div class="time_left_txt">Time Left</div>
//                     <div class="timer_sec">15</div>
//                 </div>
//                 <div class="time_line"></div>
//             </header>
//             <section>
//                 <div class="que_text">
//                     <!-- Here I've inserted question from JavaScript -->
//                 </div>
//                 <div class="option_list">
//                     <!-- Here I've inserted options from JavaScript -->
//                 </div>
//             </section>
//             <!-- footer of Quiz Box -->
//             <footer>
//                 <div class="total_que">
//                     <!-- Here I've inserted Question Count Number from JavaScript -->
//                 </div>
//                 <button class="next_btn">Next Que</button>
//             </footer>
//         </div>
//         <!-- Result Box -->
//         <div class="result_box">
//             <div class="icon">
//                 <i class="fas fa-crown"></i>
//             </div>
//             <div class="complete_text">You've completed the Quiz!</div>
//             <div class="score_text">
//                 <!-- Here I've inserted Score Result from JavaScript -->
//             </div>
//             <div class="buttons">
//                 <button class="restart">Replay Quiz</button>
//                 <button class="quit">Quit Quiz</button>
//             </div>
//         </div>
//         <!-- Inside this JavaScript file I've inserted Questions and Options only -->
//         <script src="./quiz/questions.js"></script>
//         <!-- Inside this JavaScript file I've coded all Quiz Codes -->
//         <script src="./quiz/script.js"></script>
//     </div>
// </div>

// <div class="box" id="Result">
//     <div class="title">
//         <h2 class="heading">Result</h2>
//     </div>
//     <div class="desc1" style="padding-left:50px ;">
//         <p class="desc">Hence, we have got an idea about prime numbers and can find the value of nth Prime Number using the above code.</p>
//     </div>
// </div>

// }

function Result() {
    return (
        <div class="box">
            <div class="title" id="references">
                <h2 class="heading">References</h2><br />
                <ol >
                    <li class="desc">Urban,M. &amp; Murach , J.(2018).Python programming.Shroff.</li><br />
                    <li class="desc">Liang ,Y. D.(2013).Introduction to programming using python.Pearson.</li><br />
                    <li class="desc">Taneja, S. &amp; Kumar,N.(2018).Python Programming-A modular approach.Pearson</li>
                </ol>
            </div>
            <div class="desc1">

            </div>
        </div>

    )
}
function Container() {
    return (
        <div class="container">
            <Aim />
            <Theory />
            <Procedure />
            <Practice />
            <Code />
            <Result/>
        </div>
    )
}
export default Container;