
import Header from "./webpages/Header.js";
import Nav from "./webpages/Nav.js";
import Container from "./webpages/Container.js";
import "./App.css";
import "./webpages/spline.js";
import SplineApp from "./webpages/spline.js";
import Simulation from "./webpages/simulation.js";
function App(){

  return(
    <>
    <Header />
    <div class="exp-heading">
      <h1>Hamming Code</h1>
    </div>
    <Nav/>
    <Container/>
    <Simulation/>
    <SplineApp/>

    </>    

  )
}
export default App;