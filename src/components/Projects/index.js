import React from 'react'
import "./index.scss"
import ProjectOne from "../../assets/images/project1.png"
import ProjectTwo from "../../assets/images/project2.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
const Project = () => {
  return (
    <div>
      <h1 className="head">What I've built :</h1>
      <div>
        <div className="p1">
            <FontAwesomeIcon className="fo" icon={faHashtag} color="#A69BB6"  />
            <div>
              <img className="pro" src={ProjectOne} alt="One" />
            </div>
            <div className="info">
              <h2>It is my first project. I made a portfolio with all my heart.</h2>
              <h3>Skills Used: </h3>
              <span className="spo">HTML</span>
              <span className="spo">CSS</span>
              
              <span className="spo">Javascript</span>
              <span className="spo">ReactJs</span>
              <span className="spo">Animations</span>
            
          </div>
        </div>
        
        <div className="p1">
        <FontAwesomeIcon className="fo" icon={faHashtag} color="#A69BB6"  />
          <div>
            <img className="pro" src={ProjectTwo} alt="Two" />
          </div>
          <div className="info">
            <h2>I made a Realtime CodeEditor. Here Many people can work at same time.</h2>
            <h3>Skills Used: </h3>
            <span className="spo">HTML</span>
            <span className="spo">CSS</span>
            <span className="spo">Javascript</span>
            <span className="spo">ReactJs</span>
            <span className="spo">NodeJs</span>
            <span className="spo">Web Sockets</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project