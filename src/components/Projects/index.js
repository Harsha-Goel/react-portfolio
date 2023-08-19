import React from 'react'
import "./index.scss"
import ProjectOne from "../../assets/images/p1.png"
import ProjectTwo from "../../assets/images/project2.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHashtag, faLink } from '@fortawesome/free-solid-svg-icons'
const Project = () => {
  return (
    <div className="pro-page">
    <div className="project">
      <h1 className="head">What I've built :</h1>
      
            <div className="flex">
            <FontAwesomeIcon className="fo" icon={faHashtag} color="#A69BB6"  />
            <div>
            <a href="https://react-portfolio-flax-nine.vercel.app/"  target="_blank"> 
              <img className="pro" src={ProjectOne} alt="One" />
              </a>
            </div>
            <div className="info1">
            <div className="info">
              <h2>It is my first project. I made a portfolio with all my heart.</h2>
              <h3 className="head1">Skills Used: </h3>
              <div className="skill">
              <span className="spo spo1">HTML</span>
              <span className="spo spo1">CSS</span>
              
              <span className="spo spo1">Javascript</span>
              <span className="spo spo1">ReactJs</span>
              <span className="spo spo1">Animations</span>
              </div>
              <div className="info3">
              <h3 className='head2' id='head3'>Links:</h3>
              <a
                className="spo"
                id="head4"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Harsha-Goel/react-portfolio"
                >
                <FontAwesomeIcon icon={faLink} color="pink" />
                   <span> Git Link</span>
                </a>
                <a
                className="spo spo2"
                id="head4"
                    target="_blank"
                    rel="noreferrer"
                    href="https://react-portfolio-flax-nine.vercel.app/"
                >
                <FontAwesomeIcon icon={faLink} color="pink" />
                   <span> Live Link</span>
                </a>
                </div>
          </div>
          </div>
          </div>
       
        <div className="flex flex2" id="flex1">
        <FontAwesomeIcon className="fo" icon={faHashtag} color="#A69BB6"  />
          <div>
          <a href="https://github.com/Harsha-Goel/new-code" target="_blank">
            <img className="pro" src={ProjectTwo} alt="Two" />
            </a>
          </div>
          <div className="info1">
          <div className="info">
            <h2>I made a Realtime CodeEditor. Here Many people can work at same time.</h2>
            <h3 className="head1">Skills Used: </h3>
            <div className="skill">
            <span className="spo1 spo">HTML</span>
            <span className="spo1  spo">CSS</span>
            <span className="spo1 spo">Javascript</span>
            <span className="spo1 spo">ReactJs</span>
            <span className="spo1 spo">NodeJs</span>
            <span className="spo1 spo">Web Sockets</span>
            </div>
            <div className="info3">
            <h3 className='head2' id='head6'>Links:</h3>
            <a
                className="spo"
                id="head4"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Harsha-Goel/new-code"
                >
                <FontAwesomeIcon icon={faLink} color="pink" />
                   <span> Git Link</span>
                </a>
                </div>
          </div>
          </div>
          </div>
      
      </div>
    </div>
  )
}

export default Project