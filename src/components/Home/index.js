import { Link } from "react-router-dom";
//import LogoTitle from "../../assets/images/logoH.jpg"
import "./index.scss"
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import LogoP from "../../assets/images/pho.jpg"
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ','H', 'a', 'r', 's', 'h', 'a'];
    const jobArray = ['C','o','d','e','r',' ','a','n','d',' ','W','e','b',' ','D','e','v','e','l','o','p','e','r','.'];
    return (
        <div className="container home-page">
            <div className="text-zone">
            <img
                className="logoo"
                // ref={solidLogoRef}
                src={LogoP}
                alt="JavaScript,  Developer"
            />
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}
                />
                </h1>
                <h2> Full Stack Web Developer</h2>
                
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home;