import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faJs, faPython, faJava, faFigma, faNodeJs} from '@fortawesome/free-brands-svg-icons';

function Projects() {
    return(
        <>
        <h1 id='projects'>Projects</h1>
        <div className="container">
            <div className="project-card">
                <h3>Climate Action</h3>
                <br></br>
                <div className="technologies">
                    <p><FontAwesomeIcon icon={faHtml5} className='project-icon'/></p>
                    <p><FontAwesomeIcon icon={faCss3Alt} className='project-icon'/></p>
                    <p><FontAwesomeIcon icon={faJs} className='project-icon'/></p>
                </div>
                <br></br>
                <p className='info'>Contributed in developing a website covering SDG-13 (Climate Action). </p>
                <br></br>
                <button className='btn'><a href='https://xerosf.github.io/web-dev-coursework/src/pages/home.html' target='_blank'>Explore</a></button>
            </div>

            <div className="project-card">
                <h3>Portfolio Website</h3>
                <br></br>
                <div className="technologies">
                    <p><FontAwesomeIcon icon={faHtml5} className='project-icon' /></p>
                    <p><FontAwesomeIcon icon={faCss3Alt} className='project-icon'/></p>
                    <p><FontAwesomeIcon icon={faJs} className='project-icon'/></p>
                    <p><FontAwesomeIcon icon={faReact} className='project-icon'/></p>
                </div>
                <br></br>
                <p className='info'>A personal website built to showcase <br></br> my skills, experiences and projects <br></br>in a clean layout.</p>
                <button className='btn'><a href='#' target='_blank'>Explore</a></button>
            </div>
        </div>
        </>
    );
    
}

export default Projects;