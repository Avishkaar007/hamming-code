
import Header from "./Components/Header.js"
import Nav from "./Components/Nav.js";
import React from 'react';
import Container from "./Components/Container.js";
import "./App.css";
function App(){
  
  return(
    <>
    <Header />
    <div className="exp-heading">
      <h1>Hamming Code</h1>
    </div>
    <Nav/>
    <Container/>
    

    </>    

  )
}
export default App;