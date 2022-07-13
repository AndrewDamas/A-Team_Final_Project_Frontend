import React, { useState } from "react";
import "../styles/WelcomePage.css";
import professorOak from "../images/professor-oak2.webp";

export default function WelcomePage() {
  const [slides, setSlides] = useState(1);
  return (
    <div className="WelcomePage">
      <img className="professor-oak" src={professorOak} alt="Professor Oak" />
      <div>
        {slides === 1 ? (
          <div className="Container">
            <div className="TextBox">
              <p>
                Hello there! Welcome to the world of POKÉMON! My name is OAK!
                People call me the POKÉMON PROF!
              </p>
            </div>
            <div className="SlideButton">
            <button
              onClick={() => setSlides(slides + 1)}
            >
              Next
            </button>
            </div>
          </div>
        ) : slides === 2 ? (
        <div className="Container">
        <div className="TextBox">
          <p>
            This world is inhabited by creatures called POKÉMON! For some
            people, POKÉMON are pets. Others use them for fights. Myself...I
            study POKÉMON as a profession.
          </p>
          </div>
          <div className="SlideButton">
            <button
              onClick={() => setSlides(slides + 1)}
            >
              Next
            </button>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
