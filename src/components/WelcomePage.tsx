import React, { useEffect, useState } from "react";
import "../styles/WelcomePage.css";
import professorOak from "../images/professor-oak2.webp";
import { getSpecificPokemon } from "../services/pokeAPIService";
import { Pokemon } from "../models/pokemonInterface";


export default function WelcomePage() {
  const [slides, setSlides] = useState(1);
  const [bulbasaur, setBulbasaur] = useState<Pokemon>();
  const [charmander, setCharmander] = useState<Pokemon>();
  const [squirtle, setSquirtle] = useState<Pokemon>();

  useEffect(() => {
    getSpecificPokemon("bulbasaur")
    .then(data => 
      setBulbasaur(data)
    )
  })

  useEffect(() => {
    getSpecificPokemon("charmander")
    .then(data => 
      setCharmander(data)
    )
  })

  useEffect(() => {
    getSpecificPokemon("squirtle")
    .then(data => 
      setSquirtle(data)
    )
  })

  return (
    <div className="WelcomePage">
      <img className="professor-oak" src={professorOak} alt="Professor Oak" />
      <div>
        {slides === 1 ? 
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
         : slides === 2 ? 
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
          : slides === 3 ? 
          <div className="Container">
          <div className="TextBox">
            <p>
              First, what is your name?
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
             : slides === 4 ? 
        <div className="Container">
        <div className="TextBox">
          <p>
            Right! So your name is RED!
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
           : slides === 5 ? 
           <div className="Container">
           <div className="TextBox">
             <p>
               Alright, time to make the most important decision of your life. Which POKÉMON would you like to pick for your starter?
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
             : slides === 6 ? 
              <div className="Container">
              <div className="starter-pokemon">
                <button>
                <img src={bulbasaur?.sprites.front_default} alt="" /> 
                <p>{bulbasaur?.name.toUpperCase()}</p>
                </button>
                <button>
                <img src={charmander?.sprites.front_default} alt="" />
                <p>{charmander?.name.toUpperCase()}</p>
                </button>
                <button>
                <img src={squirtle?.sprites.front_default} alt="" />
                <p>{squirtle?.name.toUpperCase()}</p>
                </button>
              </div>
               <div className="SlideButton">
                 <button
                   onClick={() => setSlides(slides + 1)}
                 >
                   Next
                 </button>
                 </div>
               </div>
               :
              <p></p>
        }
      </div>
    </div>
  );
}
