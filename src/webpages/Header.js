import logo from '../images/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <div className="Header">
      <header>
        <div className="logo"><img className="logo" src={logo}/></div>
        <h1>V-Lab @ ANDC</h1>
        <ul className="navigation">
            <li><a href="https://www.vlab.andcollege.du.ac.in/index.html">Home</a></li>
            <li><a href="https://www.vlab.andcollege.du.ac.in/index.html#labs_section">Labs</a></li>
            <li><a href="https://www.vlab.andcollege.du.ac.in/index.html#team">Team</a></li>
            <li><a href="https://www.andcollege.du.ac.in/" target="_blank" rel="noopener noreferrer">College
                    Website</a>
            </li>
        </ul>
    </header>
    </div>
  );
}

export default Header;
