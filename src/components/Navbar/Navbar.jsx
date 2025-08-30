import "./navbar.css";
import navicon from '../../assets/navicon.png';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-icon">
            <h1>Emika Sandina</h1>
        </div>

        <div className="navlinks">
            <a href="#about-me">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;
