import navicon from "../../assets/dp.png";
import "./aboutme.css";

function Aboutme() {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="main-title" id='about-me'>About Me</h1>
      <div className="container">
        <div className="about-me">
          
          <div>
            
            <img src={navicon} alt="" className="about-image" />
          </div>

          <div className="about-text">
            <h2 className="main-title">Hello, I am <br/> Emika Sandina</h2>
            <br></br>

            <p>
              I am a Computer Science undergraduate at University Of
              Westiminster passionate about building responsive and user
              friendly digital experiences.
            </p>
            <br></br>
            <p>
              With a strong foundation in programming and web technologies, my
              main aim is to become a full stack developer and develop
              applications which are functional and useful.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
