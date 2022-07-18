import React, { useEffect, useState } from "react";
import "../styles/WelcomePage.css";
import professorOak from "../images/professor-oak2.webp";
import { getSpecificPokemon } from "../services/pokeAPIService";
import Account, { Pokemon } from "../models/pokemonInterface";
import { addPokemon, fetchAccounts } from "../services/ourPokemonAPIService";


export default function WelcomePage() {
  const [slides, setSlides] = useState(1);
  const [account, setAccount] = useState<Account>();
  const [bulbasaur, setBulbasaur] = useState<Pokemon>({
    id: 1,
    base_experience: 100,
    moves: [],
    name: "test",
    species:{
      url: ""
    },
    sprites:
    {
      back_default: "",
      back_female: "",
      front_default: "",
      front_female: "",
    },
    stats:[],
    types: []});
  const [charmander, setCharmander] = useState<Pokemon>({
    id: 1,
    base_experience: 100,
    moves: [],
    name: "test",
    species:{
      url: ""
    },
    sprites:
    {
      back_default: "",
      back_female: "",
      front_default: "",
      front_female: "",
    },
    stats:[],
    types: []});
  const [squirtle, setSquirtle] = useState<Pokemon>({
    id: 1,
    base_experience: 100,
    moves: [],
    name: "test",
    species:{
      url: ""
    },
    sprites:
    {
      back_default: "",
      back_female: "",
      front_default: "",
      front_female: "",
    },
    stats:[],
    types: []});

  async function slidesFunction(){
    setSlides(slides + 1)
  }

  useEffect(() => {
    fetchAccounts()
    .then(data =>
      setAccount(data)  
    )
  })

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
                <button className="starterBtn" onClick={(e) => {addPokemon({
                id: bulbasaur.id,
                base_experience: bulbasaur.base_experience,
                moves: bulbasaur.moves,
                name: bulbasaur.name,
                species:{
                  url: bulbasaur.species.url
                },
                sprites:
                {
                  back_default: bulbasaur.sprites.back_default,
                  back_female: bulbasaur.sprites.back_female,
                  front_default: bulbasaur.sprites.front_default,
                  front_female: bulbasaur.sprites.front_female,
                },
                stats: bulbasaur.stats,
                types: bulbasaur.types});
                setSlides(slides + 1);
                }}>
                <img className="starterImg" src={bulbasaur?.sprites.front_default} alt="" /> 
                <p className="starterName">{bulbasaur?.name.toUpperCase()}</p>
                </button>
                <button className="starterBtn" onClick={(e) => {addPokemon({
                id: charmander.id,
                base_experience: charmander.base_experience,
                moves: charmander.moves,
                name: charmander.name,
                species:{
                  url: charmander.species.url
                },
                sprites:
                {
                  back_default: charmander.sprites.back_default,
                  back_female: charmander.sprites.back_female,
                  front_default: charmander.sprites.front_default,
                  front_female: charmander.sprites.front_female,
                },
                stats: charmander.stats,
                types: charmander.types})
                setSlides(slides + 1);
                }}>
                <img className = "starterImg" src={charmander?.sprites.front_default} alt="" />
                <p className = "starterName">{charmander?.name.toUpperCase()}</p>
                </button>
                <button className="starterBtn" onClick={(e) => {addPokemon({
                id: squirtle.id,
                base_experience: squirtle.base_experience,
                moves: squirtle.moves,
                name: squirtle.name,
                species:{
                  url: squirtle.species.url
                },
                sprites:
                {
                  back_default: squirtle.sprites.back_default,
                  back_female: squirtle.sprites.back_female,
                  front_default: squirtle.sprites.front_default,
                  front_female: squirtle.sprites.front_female,
                },
                stats: squirtle.stats,
                types: squirtle.types});
                setSlides(slides + 1);
                }}>
                <img className= "starterImg" src={squirtle?.sprites.front_default} alt="" />
                <p className="starterName">{squirtle?.name.toUpperCase()}</p>
                </button>
              </div>
               <div className="SlideButton">
                 </div>
               </div>
               : slides === 7 ?
               <div className="Container">
               <div className="TextBox">
                 <p> 
                   Congrats! You have selected the {account?.ourPokemon[0].types[0].type.name} type POKÉMON, {account?.ourPokemon[0].name.toUpperCase()}!
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
                 :
                 <p></p>
        }
      </div>
    </div>
  );
}
