import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faJs, faPython, faJava, faFigma, faNodeJs} from '@fortawesome/free-brands-svg-icons';
function Skills() {
    return(
        <>
        <h1>Skills</h1>
        <h3 className="skill">Programming Languages</h3> 
        <div className="container">
            <div className="card">
                
                <p className='icon'><FontAwesomeIcon icon={faPython} /></p>
                <h4>Python</h4>
            </div>

            <div className="card">
                
                <p className='icon'><FontAwesomeIcon icon={faJava} /></p>
                <h4>Java</h4>

            </div>

            <div className="card">
                
                <p className='icon'><FontAwesomeIcon icon={faJs}/></p>
                <h4>JavaScript</h4>
            </div>
        </div>

        <h3 className="skill">Front End Design and Implementation</h3> 
        <div className="container">
            <div className="card">
                
                <p className='icon'><FontAwesomeIcon icon={faHtml5} /></p>
                <h4>HTML</h4>
            </div>

            <div className="card">
                
                <p className='icon'><FontAwesomeIcon icon={faCss3Alt} /></p>
                <h4>CSS</h4>

            </div>

            <div className="card">
                
                <p className='icon'><FontAwesomeIcon icon={faFigma}/></p>
                <h4>Figma</h4>
            </div>
        </div>

        <h3 className="skill">Frameworks</h3> 
        <div className="container">

            <div className="card">
                
                <p className='icon'><FontAwesomeIcon icon={faReact} /></p>
                <h4>React JS</h4>

            </div>

            <div className="card">
                <p className='icon'><FontAwesomeIcon icon={faNodeJs}/></p>
                <h4>Node.JS</h4>
            </div>
        </div>

        
        </>
    );
}

export default Skills;