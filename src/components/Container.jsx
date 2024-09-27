import "../styles/Container.css"
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Routes, Route, Link } from "react-router-dom";
import { Heading, Box, ChakraProvider, ChakraBaseProvider, theme, useColorModeValue, useColorMode, Button } from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/react";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Simulation from "./simulation";
import Nav from "./Nav";
import Footer from "./Footer";
import Encoder from "../routes/Encoder";
import Home, { Resources } from "../routes/Learn";
import QuizX from "./quiz";
import './Simulation.css';
import React, { useState,useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';




function Aim() {
    return (<div className="box" id="aim">
        <div className="title">
            <h2 className="heading">Aim</h2>
        </div>
        <p className="desc">Encoding Hamming Code. </p>

    </div>)
}
function Theory() {


    return (

        <div className="box" id="theory">
            <div className="title">
                <h2 className="heading">Theory</h2>
            </div>
            <div className="desc ">
                <p className="text">
                    Computers represent data digitally as 1s and 0s, called 'bits'.
                    Sometimes these bits are mistakenly swapped, for example: a
                    scratched CD or a message garbled in transit between computers.
                    Invented in 1950 by <a className="obs" href="https://en.wikipedia.org/wiki/Richard_Hamming" target="_blank">Richard  Wesley Hamming</a>. Hamming Code can
                    correct 1-bit errors and detect 2-bit errors, making data transfer
                    and saving more robust.
                </p>


            </div>
            <Heading as="h1" size="md" mb="1" px="6">Standards </Heading>
            <div className="desc">
                <p className="text-1 text-2">Theoretically we can use any number of bits for hamming code . But if we use less than 4 bits it becomes inefficient as we are having more parity bits than data bits.</p>
                <ol class="text-1 text-2">
                    <li>
                        <strong>Hamming(7,4):</strong>
                        <ul style={{ listStyle: "none" }}>
                            <li>This is a single-error-correcting, double-error-detecting code.</li>
                            <li>It operates on blocks of 7 bits, where 4 bits represent the original data, and 3 bits are added for error correction and detection.</li>
                            <li>The parity bits are positioned at powers of 2 (1, 2, and 4) in the 7-bit block.</li>
                            <li>This code can correct any single-bit error and detect any two-bit error within the block.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Hamming(15,11):</strong>
                        <ul style={{ listStyle: "none" }}>
                            <li>This is an extension of the Hamming(7,4) code and operates on blocks of 15 bits.</li>
                            <li>It uses 11 data bits and adds 4 parity bits for error correction and detection.</li>
                            <li>Similar to Hamming(7,4), the parity bits are positioned at powers of 2 (1, 2, 4, and 8) in the 15-bit block.</li>
                            <li>Hamming(15,11) can correct any single-bit error and detect any two-bit error within the block.</li>
                        </ul>
                    </li>
                </ol>
                <p className="desc text-1 text-2">
                    We will be using at least 4 data bits in our simulator , but need not to follow any specific number of data bits . Instead it is general for any size.
                </p>

            </div>

            <Home />


            <h2 className="heading">Limitations</h2>

            <div className="desc1" >
                <div className="desc">Detection of Multi-Bit Errors:
                    <p className="text-1 text-2">While the (7,4) Hamming code can detect the presence of multi-bit errors, it cannot pinpoint the exact positions of all the errors within the codeword. It can only identify that an error has occurred but not necessarily how many bits are affected or where those errors are.</p>
                </div>
                <div className="desc">Efficiency is compromised:

                    <p className="text-1 text-2">Of course, by having some parity bits, not all bits can be used to transmit data. In this case, we need 05 parity bits to track 12 bits of data for an overall efficiency of 70.59%. Longer messages loosely correlate with higher efficiency. The longer the message, however, the more likely the chance of bit errors, rendering Hamming Code insufficient, since it cannot detect 3 or more errors.</p>
                </div>
            </div>
        </div>

    )
}
function Procedure() {
    return (<div className="box" id="procedure">
        <div className="title">
            <h2 className="heading">Procedure</h2>
        </div>
        <div className="desc1">
            <p className="desc" > Steps to follow are as follows:</p>
            <ol className="desc text-1 text-2 list-decimal" >

                <li>Enter  any random sequence of 0 and 1 (or you can randomize using random button).</li>
                <li>Click on Generate Button.</li>
                <li>Click submit to get the output.</li>
                <li>A sequence of bits will be generated , the colored one are parity bits.</li>
                <li>click on parity bits to check the concerned bits. </li>

            </ol><br />
        </div>
    </div>)
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

        <ChakraBaseProvider  theme={theme} bg={bg} color={color}>
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
    const [currentLanguage, setCurrentLanguage] = useState('python');
    const [copied, setCopied] = useState(false);

    const codeString = {
        python: `
        
def calculate_parity_bits(data_length):
    m = 0
    while 2 ** m < data_length + m + 1:
        m += 1
    return m

def encode_data(data):
    m = calculate_parity_bits(len(data))
    encoded_data = [0] * (len(data) + m)
    j = 0

    # Initialize encoded data with original data bits
    for i in range(len(encoded_data)):
        if i + 1 == 2 ** j:
            j += 1
        else:
            encoded_data[i] = data[i - j]

    # Calculate parity bits
    for i in range(m):
        parity_index = 2 ** i - 1
        parity = 0
        for k in range(parity_index, len(encoded_data), (parity_index + 1) * 2):
            for l in range(parity_index + 1):
                if k + l < len(encoded_data):
                    parity ^= encoded_data[k + l]
        encoded_data[parity_index] = parity

    return encoded_data

def decode_data(received_data):
    m = calculate_parity_bits(len(received_data))
    decoded_data = received_data[:len(received_data) - m]
    error_bit = 0

    # Calculate parity bits
    for i in range(m):
        parity_index = 2 ** i - 1
        parity = 0
        for k in range(parity_index, len(received_data), (parity_index + 1) * 2):
            for l in range(parity_index + 1):
                if k + l < len(received_data):
                    parity ^= received_data[k + l]
        if parity != 0:
            error_bit += parity_index + 1

    # Correct errors
    if error_bit != 0:
        received_data[error_bit - 1] ^= 1

    # Remove parity bits
    j = 0
    for i in range(len(received_data)):
        if i + 1 != 2 ** j:
            decoded_data[i - j] = received_data[i]
        else:
            j += 1

    return decoded_data

# Example usage
data = [1, 0, 0, 1]  # Example data
print("Original Data:", data)

encoded_data = encode_data(data)
print("Encoded Data:", encoded_data)

# Simulate error in transmission
encoded_data[2] = 1 - encoded_data[2]  # Flip the third bit (index 2)

decoded_data = decode_data(encoded_data)
print("Decoded Data:", decoded_data)

    `,
        Java: `
import java.util.Arrays;

public class HammingCode {
    
    // Function to calculate number of parity bits required for given data length
    public static int calculateParityBits(int dataLength) {
        int m = 0;
        while (Math.pow(2, m) < dataLength + m + 1) {
            m++;
        }
        return m;
    }

    // Function to encode data using Hamming Code
    public static int[] encodeData(int[] data) {
        int m = calculateParityBits(data.length);
        int[] encodedData = new int[data.length + m];
        int j = 0;

        // Initialize encodedData with 0s
        for (int i = 0; i < encodedData.length; i++) {
            if ((i + 1) == Math.pow(2, j)) {
                j++;
            } else {
                encodedData[i] = data[i - j];
            }
        }

        // Calculate parity bits
        for (int i = 0; i < m; i++) {
            int parityIndex = (int) Math.pow(2, i) - 1;
            int parity = 0;
            for (int k = parityIndex; k < encodedData.length; k += (parityIndex + 1) * 2) {
                for (int l = 0; l <= parityIndex && k + l < encodedData.length; l++) {
                    parity ^= encodedData[k + l];
                }
            }
            encodedData[parityIndex] = parity;
        }

        return encodedData;
    }

    // Function to decode Hamming Code
    public static int[] decodeData(int[] receivedData) {
        int m = calculateParityBits(receivedData.length);
        int[] decodedData = Arrays.copyOf(receivedData, receivedData.length - m);
        int errorBit = 0;

        // Calculate parity bits
        for (int i = 0; i < m; i++) {
            int parityIndex = (int) Math.pow(2, i) - 1;
            int parity = 0;
            for (int k = parityIndex; k < receivedData.length; k += (parityIndex + 1) * 2) {
                for (int l = 0; l <= parityIndex && k + l < receivedData.length; l++) {
                    parity ^= receivedData[k + l];
                }
            }
            if (parity != 0) {
                errorBit += parityIndex + 1;
            }
        }

        // Correct errors
        if (errorBit != 0) {
            receivedData[errorBit - 1] ^= 1;
        }

        // Remove parity bits
        int j = 0;
        for (int i = 0; i < receivedData.length; i++) {
            if ((i + 1) != Math.pow(2, j)) {
                decodedData[i - j] = receivedData[i];
            } else {
                j++;
            }
        }

        return decodedData;
    }

    public static void main(String[] args) {
        int[] data = {1, 0, 0, 1}; // Example data
        System.out.println("Original Data: " + Arrays.toString(data));

        int[] encodedData = encodeData(data);
        System.out.println("Encoded Data: " + Arrays.toString(encodedData));

        // Simulate error in transmission
        encodedData[2] = 1 - encodedData[2]; // Flip the third bit (index 2)

        int[] decodedData = decodeData(encodedData);
        System.out.println("Decoded Data: " + Arrays.toString(decodedData));
    }
}

          
      `,
        'C++': `
        #include <iostream>
        #include <vector>
        
        using namespace std;
        
        // Function to calculate number of parity bits required for given data length
        int calculateParityBits(int dataLength) {
            int m = 0;
            while (pow(2, m) < dataLength + m + 1) {
                m++;
            }
            return m;
        }
        
        // Function to encode data using Hamming Code
        vector<int> encodeData(const vector<int>& data) {
            int m = calculateParityBits(data.size());
            vector<int> encodedData(data.size() + m);
            int j = 0;
        
            // Initialize encodedData with 0s
            for (int i = 0; i < encodedData.size(); i++) {
                if ((i + 1) == pow(2, j)) {
                    j++;
                } else {
                    encodedData[i] = data[i - j];
                }
            }
        
            // Calculate parity bits
            for (int i = 0; i < m; i++) {
                int parityIndex = pow(2, i) - 1;
                int parity = 0;
                for (int k = parityIndex; k < encodedData.size(); k += (parityIndex + 1) * 2) {
                    for (int l = 0; l <= parityIndex && k + l < encodedData.size(); l++) {
                        parity ^= encodedData[k + l];
                    }
                }
                encodedData[parityIndex] = parity;
            }
        
            return encodedData;
        }
        
        // Function to decode Hamming Code
        vector<int> decodeData(vector<int>& receivedData) {
            int m = calculateParityBits(receivedData.size());
            vector<int> decodedData(receivedData.size() - m);
            int errorBit = 0;
        
            // Calculate parity bits
            for (int i = 0; i < m; i++) {
                int parityIndex = pow(2, i) - 1;
                int parity = 0;
                for (int k = parityIndex; k < receivedData.size(); k += (parityIndex + 1) * 2) {
                    for (int l = 0; l <= parityIndex && k + l < receivedData.size(); l++) {
                        parity ^= receivedData[k + l];
                    }
                }
                if (parity != 0) {
                    errorBit += parityIndex + 1;
                }
            }
        
            // Correct errors
            if (errorBit != 0) {
                receivedData[errorBit - 1] ^= 1;
            }
        
            // Remove parity bits
            int j = 0;
            for (int i = 0; i < receivedData.size(); i++) {
                if ((i + 1) != pow(2, j)) {
                    decodedData[i - j] = receivedData[i];
                } else {
                    j++;
                }
            }
        
            return decodedData;
        }
        
        int main() {
            vector<int> data = {1, 0, 0, 1}; // Example data
            cout << "Original Data: ";
            for (int bit : data) {
                cout << bit << " ";
            }
            cout << endl;
        
            vector<int> encodedData = encodeData(data);
            cout << "Encoded Data: ";
            for (int bit : encodedData) {
                cout << bit << " ";
            }
            cout << endl;
        
            // Simulate error in transmission
            encodedData[2] = 1 - encodedData[2]; // Flip the third bit (index 2)
        
            vector<int> decodedData = decodeData(encodedData);
            cout << "Decoded Data: ";
            for (int bit : decodedData) {
                cout << bit << " ";
            }
            cout << endl;
        
            return 0;
        }
        
       ` ,
    };

    const handleCopy = () => {
        const code = codeString[currentLanguage];
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };


    return (
        <>

            <div className="box" id="code">
                <div className="title">
                    <h2 className="heading font-Robo text-xl md:text-3xl text-center py-2">Code</h2>
                </div>
                <div className="desc1">
                    <div className="code_header">
                        <button
                            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mx-1 ${currentLanguage === 'python' ? 'active' : ''}`}
                            onClick={() => setCurrentLanguage('python')}
                        >
                            Python
                        </button>
                        <button
                            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mx-1 ${currentLanguage === 'java' ? 'active' : ''}`}
                            onClick={() => setCurrentLanguage('Java')}
                        >
                            Java
                        </button>
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mx-1"
                            // style={{ backgroundColor: 'Black', color: 'white', marginBottom: '-20px' }}
                            onClick={() => setCurrentLanguage('C++')}
                        >
                            C++
                        </button>
                        <button className=" bg-gray-300 hover:bg-gray-800 hover:text-white text-black font-bold py-1 px-2 rounded-sm float-right mt-2" onClick={handleCopy} >
                            {copied ? 'Copied!' : 'Copy Code'}
                        </button>

                    </div>
                    <div className="max-w-2x1 min-w-[25rem]  rounded-md overflow-hidden">

                        <div className="grid place-items-center rounded-lg p-4 bg-slate-950">
                            <p className="text-xl text-white ">
                                {currentLanguage}
                            </p>
                            <SyntaxHighlighter language="jsx" style={atomOneDark} className="atom scale rounded-lg w-full " customStyle={{ padding: '20px', paddingTop: '6px' }}>
                                {codeString[currentLanguage]}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}

function Quiz() {

    return (
        <div className="box" id="quiz">

            <div className="title">
                <div className="heading">Quiz</div>
                <QuizX />
            </div>

        </div>

    )
}

function Result() {
    return (
        <>
            <div className="box" id="result">
                <div className="heading">Result
                    <p className="desc text-1 text-2">
                        This V-lab is useful for detecting error in the given bit stream using Hamming Code.
                    </p>
                </div>
            </div>


            <div className="box">
                <div className="title" id="references">
                    <div className="heading">
                        References
                    </div>
                    <Resources />

                    <div className="">
                        <p className="bold">
                        Tools and Technologies used :
                        </p>
                    
                    <ol>
                        <li><a href="https://react.dev/" target="_blank">React </a></li>
                        <li><a href="https://vitejs.dev/" target="_blank">Vite </a></li>
                    </ol>
                </div>
                </div>
                
                
            </div>

        </>
    )
}

function Team() {

    return (
        <div className="box" id="team">

            <div className="title">
                <div className="heading">Team and Tools</div>
                <h2 class="bold">
                    Students
                </h2>
                <div className="student">
                  <span className="lightBold">Avishkaar Pawar</span> <span className="p-4"> AD-1224 </span> <span className="lightBold"> B.Sc. (H) Computer Science </span> <span>(2023-24)</span>
                </div>
                
                
                <h2 class="bold ">Mentors</h2>
                <div className="teacher">
                    Dr. Sharanjit Kaur
                </div>
            </div>
            

        </div>

    )
}

function Header() {
    const [isLargerThan600] = useMediaQuery(`(min-width: 600px)`);

    const size = isLargerThan600 ? 'md' : 'xs';
    return (
        <>
            <header className="flex justify-center ">
                <div>
                    <img class="logo" src="/images/logo.png" />
                    <h1>V-Lab @ ANDC</h1>
                </div>
                <ul class="navigation">
                    <li><a href="https://www.vlab.andcollege.du.ac.in/index.html">Home</a></li>
                    <li><a href="https://www.vlab.andcollege.du.ac.in/csSc/comp.html">Labs</a></li>
                    <li><a href="https://www.vlab.andcollege.du.ac.in/index.html">Team</a></li>
                    <li><a href="https://www.andcollege.du.ac.in/" target="_blank" rel="noopener noreferrer">College Website</a>
                    </li>
                </ul>

            </header>

        </>
    );
}




function Container() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };



    return (<ChakraProvider theme={theme}>
        <div className="myContainer">

            <Header />
            <div class="exp-heading">
                <h1>Hamming Code</h1>
            </div>
            <Nav />
            <Aim />
            <Theory />
            <Procedure />
            <Practice />
            <Code />
            <Quiz />
            <Result />
            <Team />
            <Footer />
            <div id="goTop" style={{ display: showButton ? 'block' : 'none' }} onClick={scrollToTop}>↑</div>
        </div>
    </ChakraProvider>

    )
}


export default Container;