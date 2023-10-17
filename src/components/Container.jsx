import "../styles/Container.css"
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Routes, Route, Link } from "react-router-dom";
import { Box, ChakraProvider, ChakraBaseProvider, theme, useColorModeValue, useColorMode, Button } from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/react";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Simulation from "./simulation";
import Nav from "./Nav";
import Encoder from "../routes/Encoder";
import  Home ,{Resources}  from "../routes/Learn"
function Aim() {
    return (<div className="box" id="aim">
        <div className="title">
            <h2 className="heading">Aim</h2>
        </div>
        <div className="desc1">
            <p className="desc">To Simulate Hamming Code </p>
        </div>

        {/* <Box>
                
            
                <Link to="/src/routes/encoder" > More.. </Link>  
            
            <Routes>

            <Route path="/encoder" component={Encoder} > </Route>
            </Routes>
                
            
        </Box> */}
    </div>)
}
function Theory() {


    return (
        <div className="box" id="theory">
            <div className="title">
                <h2 className="heading">Theory</h2>
            </div>
            <div className="desc">Hamming code is a set of error-correction codes that can be used to detect and correct the errors that can occur when the data is moved or stored from the sender to the receiver. It is a technique developed by R.W. Hamming for error correction. Redundant bits – Redundant bits are extra binary bits that are generated and added to the information-carrying bits of data transfer to ensure that no bits were lost during the data transfer. The number of redundant bits can be calculated using the following formula:
            </div>
            <Home />
        </div>
    )
}
function Procedure() {
    return (<div className="box" id="procedure">
        <div className="title">
            <h2 className="heading">Procedure</h2>
        </div>
        <div className="desc1">
            <p className="desc" >Steps to follow are as follows:</p>
            <ol className="desc" >

                <li>Click on the simulation tab.</li>
                <li>Read the code.</li>

                <li>Click submit to get the output.</li>

            </ol><br />
        </div>
    </div>)
}

function StyleColorMode() {



    return (
        <>
            <Box mb={4} bg={bg} color={color}>
                This box's style will change based on the color mode.
            </Box>
            <Button size='sm' onClick={toggleColorMode}>
                Toggle Mode
            </Button>
        </>
    )
}

function Practice() {
    const handle = useFullScreenHandle();
    const { toggleColorMode } = useColorMode()
    const bg = useColorModeValue('white', 'black')
    const color = useColorModeValue('black', 'white')
    let flag = true;
    function myInit() {
        try {
            handle.enter();
            if (color == "white" && flag) {
                flag = !flag
                toggleColorMode();

            }
            return;
        }
        finally {
            if (!flag) {
                flag = !flag;
                toggleColorMode();
            }
        }
    }
    return (

        <ChakraBaseProvider theme={theme} bg={bg} color={color}>
            <Box bg={bg}>
                <div className="box" id="practice">
                    <div className="title">
                        <h2 className="heading">Practice</h2>
                    </div>
                    <br />
                    <div className="line">
                        <button onClick={myInit} id="goFullScreen">
                            ⛶
                        </button>
                    </div>
                    <br />

                    <FullScreen handle={handle}>
                        <Simulation />

                    </FullScreen>

                </div>
            </Box>

        </ChakraBaseProvider>
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
                <div className="heading">Quiz</div>
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
                    <Resources />
                </div>
                <div className="desc1">

                </div>
            </div>
        </>
    )
}
function Header() {
    const [isLargerThan600] = useMediaQuery(`(min-width: 600px)`);

    const size = isLargerThan600 ? 'md' : 'xs';
    return (
        <>
            <header>
                <div>
                    <img class="logo" src="../../public/images/logo.png" />
                    <h1>V-Lab @ ANDC</h1>
                </div>
                <ul class="navigation">
                    <li><a href="https://www.vlab.andcollege.du.ac.in/index.html">Home</a></li>
                    <li><a href="https://www.vlab.andcollege.du.ac.in/index.html#labs_section">Labs</a></li>
                    <li><a href="https://www.vlab.andcollege.du.ac.in/index.html#team">Team</a></li>
                    <li><a href="https://www.andcollege.du.ac.in/" target="_blank" rel="noopener noreferrer">College Website</a>
                    </li>
                </ul>
                <ColorModeSwitcher justifySelf="flex-end" size={size} />
            </header>
        </>
    );
}
function Container() {
    return (<ChakraProvider theme={theme}>
        <div className="container">

            <Header />
            <Nav />
            <Aim />
            <Theory />
            <Procedure />
            <Practice />
            <Code />
            <Result />
        </div>
    </ChakraProvider>

    )
}
export default Container;