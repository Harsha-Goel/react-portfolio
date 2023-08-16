import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const About = () =>{
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1 className="hedo">
                    <AnimatedLetters
                       
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am a 3rd year B.Tech student at The LNM Institute of Information Technoloy , Jaipur.
                </p>

                <p>
                    I'm very ambitious full stack developer who loves to solve DSA problems,and my skills are HTML, CSS, Javascript, C++, DSA, ReactJS, NodeJs, MySQL, and currently looking for a role in
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p className="hide">
                    I'm quietly confident,naturally curious, and perpetually working on 
                    improving my chops one design problem at a time.
                </p>
                <p className="hide">
                    If I need to define myself in one sentence that would be a family person 
                    , daughter of a handsome father and a beautiful mother ,dance 
                    feels good and tech-obsessed!!!
                </p>
                <h2 className="head">Link to my coding profiles :</h2>
                {/* <Link to="https://leetcode.com/Harsha088/" class="logocode">Leetcode</Link> */}
                <div className="chu">
                <a
                className="logocode"
                    target="_blank"
                    rel="noreferrer"
                    href="https://leetcode.com/Harsha088/"
                >
                <FontAwesomeIcon icon={faLink} color="white" />
                   <span> Leetcode</span>
                </a>
                <a
                className="logocod"
                    target="_blank"
                    rel="noreferrer"
                    href="https://codeforces.com/profile/harshagoyal868"
                >
                    <FontAwesomeIcon icon={faLink} color="white" />
                    <span> Codeforces</span>
                </a>
                </div>
                {/* <Link to="https://codeforces.com/profile/harshagoyal868" class="logocod"> Codeforces</Link> */}
            </div>
            <div className="stage-cube-cont">
                <div className='cubespinner'>
                    <div className="face1">
                        <FontAwesomeIcon icon={faNodeJs} color='#DD0031'/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color='F06529'/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;