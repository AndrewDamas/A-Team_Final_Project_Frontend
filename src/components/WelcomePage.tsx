import React, { useEffect, useState } from "react";
import "../styles/WelcomePage.css";
import professorOak from "../images/professor-oak2.webp";
import { getSpecificPokemon } from "../services/pokeAPIService";
import Account, { Pokemon, Move } from "../models/pokemonInterface";
import { addPokemon, fetchAccounts } from "../services/ourPokemonAPIService";
import { useNavigate } from "react-router-dom";


export default function WelcomePage() {
  const [slides, setSlides] = useState(1);
  const [starterPokemon, setStarterPokemon] = useState<Pokemon>();
  const [account, setAccount] = useState<Account>();
  const [bulbasaur, setBulbasaur] = useState<Pokemon>({
    id: 1,
    level: 0,
    gender: "",
    current_hp: 0,
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
  const [bulbasaurStartingMoves, setBulbasaurStartingMoves] = useState<Move[]>();
  const [charmander, setCharmander] = useState<Pokemon>({
    id: 1,
    level: 0,
    gender: "",
    current_hp: 0,
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
  const [charmanderStartingMoves, setCharmanderStartingMoves] = useState<Move[]>();
  const [squirtle, setSquirtle] = useState<Pokemon>({
    id: 1,
    level: 0,
    gender: "",
    current_hp: 0,
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
  const [squirtleStartingMoves, setSquirtleStartingMoves] = useState<Move[]>();

  const navigate = useNavigate()

  useEffect(() => {
    fetchAccounts()
    .then(data =>
      setAccount(data)  
    )
  })

  useEffect(() => {
    getSpecificPokemon("bulbasaur")
    .then(data => {
      setBulbasaur(data);
      const arr: Move[] = [];
      data.moves.forEach(move => {
        if (move.version_group_details[0].level_learned_at >= 0 && move.version_group_details[0].level_learned_at <= 5 && move.version_group_details[0].version_group.name === "red-blue" && move.version_group_details[0].move_learn_method.name === "level-up"){
          arr.push(move);
        }
      })
      setBulbasaurStartingMoves(arr);
    })
  })

  useEffect(() => {
    getSpecificPokemon("charmander")
    .then(data => {
      setCharmander(data);
      const arr: Move[] = [];
      data.moves.forEach(move => {
        if (move.version_group_details[0].level_learned_at >= 0 && move.version_group_details[0].level_learned_at <= 5 && move.version_group_details[0].version_group.name === "red-blue" && move.version_group_details[0].move_learn_method.name === "level-up"){
          arr.push(move);
        }
      })
      setCharmanderStartingMoves(arr);
    }
    )
  })

  useEffect(() => {
    getSpecificPokemon("squirtle")
    .then(data => {
      setSquirtle(data);
      const arr: Move[] = [];
      data.moves.forEach(move => {
        if (move.version_group_details[0].level_learned_at >= 0 && move.version_group_details[0].level_learned_at <= 5 && move.version_group_details[0].version_group.name === "red-blue" && move.version_group_details[0].move_learn_method.name === "level-up"){
          arr.push(move);
        }
      })
      setSquirtleStartingMoves(arr);
    }
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
                <button onClick={(e) => {
                setStarterPokemon(bulbasaur);
                addPokemon({
                id: bulbasaur.id,
                level: 5,
                gender: "male",
                current_hp: bulbasaur.stats[bulbasaur.stats.findIndex(stat => stat.stat.name === "hp")].base_stat + ((bulbasaur.stats[bulbasaur.stats.findIndex(stat => stat.stat.name === "hp")].base_stat / 50) * 5),
                base_experience: bulbasaur.base_experience,
                moves: bulbasaurStartingMoves!,
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
                stats: [
                  {
                    base_stat: bulbasaur.stats[bulbasaur.stats.findIndex(stat => stat.stat.name === "hp")].base_stat + ((bulbasaur.stats[bulbasaur.stats.findIndex(stat => stat.stat.name === "hp")].base_stat / 50) * 5),
                    stat: {
                        name: 'hp'
                    }
                  },
                  {
                    base_stat: bulbasaur.stats[bulbasaur.stats.findIndex(stat => stat.stat.name === "attack")].base_stat + ((bulbasaur.stats[bulbasaur.stats.findIndex(stat => stat.stat.name === "attack")].base_stat / 50) * 5),
                    stat: {
                        name: 'attack'
                    }
                  },
                  {
                    base_stat: bulbasaur.stats[bulbasaur.stats.findIndex(stat => stat.stat.name === "defense")].base_stat + ((bulbasaur.stats[bulbasaur.stats.findIndex(stat => stat.stat.name === "defense")].base_stat / 50) * 5),
                    stat: {
                        name: 'defense'
                    }
                  },
                  {
                    base_stat: bulbasaur.stats[bulbasaur.stats.findIndex(stat => stat.stat.name === "speed")].base_stat + ((bulbasaur.stats[bulbasaur.stats.findIndex(stat => stat.stat.name === "speed")].base_stat / 50) * 5),
                    stat: {
                        name: 'speed'
                    }
                  },
                ],
                types: bulbasaur.types});
                setSlides(slides + 1);
                }}>
                <img src={bulbasaur?.sprites.front_default} alt="" /> 
                <p>{bulbasaur?.name.toUpperCase()}</p>
                </button>
                <button onClick={(e) => {
                setStarterPokemon(charmander);
                addPokemon({
                id: charmander.id,
                level: 5,
                gender: "male",
                current_hp: charmander.stats[charmander.stats.findIndex(stat => stat.stat.name === "hp")].base_stat + ((charmander.stats[charmander.stats.findIndex(stat => stat.stat.name === "hp")].base_stat / 50) * 5),
                base_experience: charmander.base_experience,
                moves: charmanderStartingMoves!,
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
                stats: [
                  {
                    base_stat: charmander.stats[charmander.stats.findIndex(stat => stat.stat.name === "hp")].base_stat + ((charmander.stats[charmander.stats.findIndex(stat => stat.stat.name === "hp")].base_stat / 50) * 5),
                    stat: {
                        name: 'hp'
                    }
                  },
                  {
                    base_stat: charmander.stats[charmander.stats.findIndex(stat => stat.stat.name === "attack")].base_stat + ((charmander.stats[charmander.stats.findIndex(stat => stat.stat.name === "attack")].base_stat / 50) * 5),
                    stat: {
                        name: 'attack'
                    }
                  },
                  {
                    base_stat: charmander.stats[charmander.stats.findIndex(stat => stat.stat.name === "defense")].base_stat + ((charmander.stats[charmander.stats.findIndex(stat => stat.stat.name === "defense")].base_stat / 50) * 5),
                    stat: {
                        name: 'defense'
                    }
                  },
                  {
                    base_stat: charmander.stats[charmander.stats.findIndex(stat => stat.stat.name === "speed")].base_stat + ((charmander.stats[charmander.stats.findIndex(stat => stat.stat.name === "speed")].base_stat / 50) * 5),
                    stat: {
                        name: 'speed'
                    }
                  },
                ],
                types: charmander.types})
                setSlides(slides + 1);
                }}>
                <img src={charmander?.sprites.front_default} alt="" />
                <p>{charmander?.name.toUpperCase()}</p>
                </button>
                <button onClick={(e) => {
                setStarterPokemon(squirtle);
                addPokemon({
                id: squirtle.id,
                level: 5,
                gender: "male",
                current_hp: squirtle.stats[squirtle.stats.findIndex(stat => stat.stat.name === "hp")].base_stat + ((squirtle.stats[squirtle.stats.findIndex(stat => stat.stat.name === "hp")].base_stat / 50) * 5),
                base_experience: squirtle.base_experience,
                moves: squirtleStartingMoves!,
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
                stats: [
                  {
                    base_stat: squirtle.stats[squirtle.stats.findIndex(stat => stat.stat.name === "hp")].base_stat + ((squirtle.stats[squirtle.stats.findIndex(stat => stat.stat.name === "hp")].base_stat / 50) * 5),
                    stat: {
                        name: 'hp'
                    }
                  },
                  {
                    base_stat: squirtle.stats[squirtle.stats.findIndex(stat => stat.stat.name === "attack")].base_stat + ((squirtle.stats[squirtle.stats.findIndex(stat => stat.stat.name === "attack")].base_stat / 50) * 5),
                    stat: {
                        name: 'attack'
                    }
                  },
                  {
                    base_stat: squirtle.stats[squirtle.stats.findIndex(stat => stat.stat.name === "defense")].base_stat + ((squirtle.stats[squirtle.stats.findIndex(stat => stat.stat.name === "defense")].base_stat / 50) * 5),
                    stat: {
                        name: 'defense'
                    }
                  },
                  {
                    base_stat: squirtle.stats[squirtle.stats.findIndex(stat => stat.stat.name === "speed")].base_stat + ((squirtle.stats[squirtle.stats.findIndex(stat => stat.stat.name === "speed")].base_stat / 50) * 5),
                    stat: {
                        name: 'speed'
                    }
                  },
                ],
                types: squirtle.types});
                setSlides(slides + 1);
                }}>
                <img src={squirtle?.sprites.front_default} alt="" />
                <p>{squirtle?.name.toUpperCase()}</p>
                </button>
              </div>
               <div className="SlideButton">
                 </div>
               </div>
               : slides === 7 ?
               <div className="Container">
               <div className="TextBox">
                 <p> 
                   Congrats! You have selected the {starterPokemon?.types[0].type.name} type POKÉMON, {starterPokemon?.name.toUpperCase()}!
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
                 : slides === 8 ?
                 <div className="Container">
                 <div className="TextBox">
                   <p> 
                     Now, an important part of POKÉMON is learning to battle, so I'll be teaching you the basics by battling me.
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
                   : slides === 9 ?
                   <div className="Container">
                   <div className="TextBox">
                     <p> 
                       Click the button below to start our battle!
                     </p>
                     </div>
                     <div className="SlideButton">
                       <button
                         onClick={() => navigate("/tutorial-battle")}
                       >
                         BATTLE!
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
