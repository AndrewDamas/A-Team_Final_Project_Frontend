import React from 'react';
import "../styles/WelcomePage.css"
import professorOak from "../images/professor-oak.png";

export default function WelcomePage() {
  return (
    <div className="WelcomePage">
        <img className="professor-oak" src={professorOak} alt="Professor Oak"/>
    </div>
  )
}