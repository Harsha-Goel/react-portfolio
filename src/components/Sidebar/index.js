import "./index.scss"
import {Link,NavLink} from "react-router-dom"
import LogoH from "../../assets/images/LogoH.gif"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome ,faProjectDiagram,faUser} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
//import LogoSubtitle from "../../assets/images/logo_sub.png"
const Sidebar = ()=> (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoH} alt="logo" />
            <h2>HARSHA</h2>
        </Link>
        
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
             exact="true"
             activeclassname="active" 
             className="about-link" 
             to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink 
             exact="true" 
             activeclassname="active" 
             className="project-link" 
             to="/project"
            >
                <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
            </NavLink>
            <NavLink 
             exact="true" 
             activeclassname="active" 
             className="contact-link" 
             to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
           
        </nav>

        <ul>
            <li>
            <h2>Let's connect</h2>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/harsha-goyal-10608a230/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3BeMAYN03BRR6BGT5P23Gopg%3D%3D"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Harsha-Goel"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            
           
        </ul>
    </div>
)

export default Sidebar;