import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faJs, faPython, faJava, faFigma, faNodeJs} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const skillsData = [
    {name:'Python', icon:faPython, category:'Programming Languages'},
    { name: 'Java', icon: faJava, category: 'Programming Languages' },
    { name: 'JavaScript', icon: faJs, category: 'Programming Languages' },
    { name: 'HTML', icon: faHtml5, category: 'Markup Languages' },
    { name: 'CSS', icon: faCss3Alt, category: 'Markup Languages' },
    { name: 'Figma', icon: faFigma, category: 'Front End Design' },
    { name: 'React', icon: faReact, category: 'Frameworks' },
]

const categories = [
    'All',
    'Programming Languages',
    'Markup Languages',
    'Frameworks',
    'Front End Design'
]

function Skills() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    let filteredSkills;

    if (selectedCategory === "All") {
        filteredSkills = skillsData;
    }

    else {
        filteredSkills = skillsData.filter(skill => skill.category === selectedCategory);
    }
    


    return(
        <>
        <h1 id='skills'>Skills</h1>
        <div className="btn-container">
            <button onClick={()=>setSelectedCategory('All')}>All</button>
            <button onClick={()=>setSelectedCategory('Programming Languages')}>Programming Languages</button>
            <button onClick={()=>setSelectedCategory('Markup Languages')}>Markup Languages</button>
            <button onClick={()=>setSelectedCategory('Frameworks')}>Frameworks</button>
            <button onClick={()=>setSelectedCategory('Front End Design')}>Front End Design</button>
        </div>

        <div className="container">
            {
                filteredSkills.map(skill => (
                    <div className="card" key={skill.name}>
                        <p className="icon"><FontAwesomeIcon icon={skill.icon}/></p>
                        <h4>{skill.name}</h4>
                    </div>
                ))}
        </div>

        
        </>
    );
}

export default Skills;

///