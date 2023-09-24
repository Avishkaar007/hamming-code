
import Header from "./webpages/Header.js";
import Nav from "./webpages/Nav.js";
import Container from "./webpages/Container.js";
import "./App.css";
import "./webpages/spline.js";
import Simulation from "./webpages/simulation.jsx";
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