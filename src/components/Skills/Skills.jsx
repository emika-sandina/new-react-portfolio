import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faJs, faPython, faJava } from '@fortawesome/free-brands-svg-icons';

function Skills() {
    return(
        <>
        <h3 className="skill">Programming Languages</h3> 
        <div className="container">
            
            <div className="card">
                <h4>Python</h4>
                <p className='icon'><FontAwesomeIcon icon={faPython} /></p>
            </div>

            <div className="card">
                <h4>Java</h4>
                <p className='icon'><FontAwesomeIcon icon={faJava} /></p>
            </div>

            <div className="card">
                <h4>JavaScript</h4>
                <p className='icon'><FontAwesomeIcon icon={faJs}/></p>
            </div>
        </div>
        </>
    );
}

export default Skills;