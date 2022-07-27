import React, { useContext, useEffect, useState } from 'react';
import "../styles/BattleScreen.css"
import MaleSymbol from "../images/gender-symbols/male-symbol.png";
import FemaleSymbol from "../images/gender-symbols/female-symbol.png";
import { fetchAccounts } from '../services/ourPokemonAPIService';
import Account, { Move, Opponent } from '../models/pokemonInterface';
import { getMoveData } from '../services/pokeAPIService';
import MoveDetails from '../models/moveInterface';

export default function TutorialBattle() {
    const [account, setAccount] = useState<Account>();
    const [opponent, setOpponent] = useState<Opponent>();
    const [menu, setMenu] = useState("main-menu");
    const [battleWords, setBattleWords] = useState<string>("pokemon-choices");

    const url = "localhost:3001/"

    const [gameState, setGameState] = useState<string>("playing");

    const [ourAttackChoice, setOurAttackChoice] = useState<string>("pound");
    const [randomNum, setRandomNum] = useState<number>(217);
    const [randomNumCrit, setRandomNumCrit] = useState<number>(100);
    const [crit, setCrit] = useState<number>(1);
    const [ourAttack, setOurAttack] = useState<MoveDetails>();
    const [battleDamage, setBattleDamage] = useState<number>(0);

    const [type1, setType1] = useState<number>(1);
    const [type2, setType2] = useState<number>(1);

    const [ourHealth, setOurHealth] = useState(0);
    const [oppHealth, setOppHealth] = useState(0);

    function testEffectiveness(move_type: string, pokemon_type: string){
        if ((move_type === "normal" && pokemon_type === "rock") || (move_type === "fire" && (pokemon_type === "fire" || pokemon_type === "water" || pokemon_type === "rock" || pokemon_type === "dragon")) || (move_type === "water" && (pokemon_type === "water" || pokemon_type === "grass" || pokemon_type === "dragon")) || (move_type === "electric" && (pokemon_type === "electric" || pokemon_type === "grass" || pokemon_type === "dragon")) || (move_type === "grass" && (pokemon_type === "grass" || pokemon_type === "fire" || pokemon_type === "poison" || pokemon_type === "flying" || pokemon_type === "bug" || pokemon_type === "dragon")) || (move_type === "ice" && (pokemon_type === "fire" || pokemon_type === "water" || pokemon_type === "ice")) || (move_type === "fighting" && (pokemon_type === "poison" || pokemon_type === "flying" || pokemon_type === "psychic" || pokemon_type === "bug")) || (move_type === "poison" && (pokemon_type === "poison" || pokemon_type === "ground" || pokemon_type === "rock" || pokemon_type === "ghost")) || (move_type === "ground" && (pokemon_type === "grass" || pokemon_type === "bug")) || (move_type === "flying" && (pokemon_type === "electric" || pokemon_type === "rock")) || (move_type === "psychic" && pokemon_type === "psychic") || (move_type === "bug" && (pokemon_type === "fire" || pokemon_type === "fighting" || pokemon_type === "poison" || pokemon_type === "flying" || pokemon_type === "ghost")) || (move_type === "rock" && (pokemon_type === "fighting" || pokemon_type === "ground"))){
            return 0.5
        } else if ((move_type === "fire" && (pokemon_type === "grass" || pokemon_type === "ice" || pokemon_type === "bug")) || (move_type === "water" && (pokemon_type === "fire" || pokemon_type === "ground" || pokemon_type === "rock")) || (move_type === "electric" && (pokemon_type === "water" || pokemon_type === "flying")) || (move_type === "grass" && (pokemon_type === "water" || pokemon_type === "ground" || pokemon_type === "rock")) || (move_type === "ice" && (pokemon_type === "grass" || pokemon_type === "ground" || pokemon_type === "flying" || pokemon_type === "dragon")) || (move_type === "fighting" && (pokemon_type === "normal" || pokemon_type === "ice" || pokemon_type === "rock")) || (move_type === "poison" && pokemon_type === "grass") || (move_type === "ground" && (pokemon_type === "fire" || pokemon_type === "electric" || pokemon_type === "poison" || pokemon_type === "rock")) || (move_type === "flying" && (pokemon_type === "grass" || pokemon_type === "fighting" || pokemon_type === "bug")) || (move_type === "psychic" && (pokemon_type === "fighting" || pokemon_type === "poison")) || (move_type === "bug" && (pokemon_type === "grass" || pokemon_type === "psychic")) || (move_type === "rock" && (pokemon_type === "fire" || pokemon_type === "flying" || pokemon_type === "ice" || pokemon_type === "bug")) || (move_type === "ghost" && (pokemon_type === "ghost" || pokemon_type === "psychic")) || (move_type === "dragon" && pokemon_type === "dragon")){
            return 2
        } else if ((move_type === "normal" && pokemon_type === "ghost") || (move_type === "electric" && pokemon_type === "ground") || (move_type === "fighting" && pokemon_type === "ghost") || (move_type === "ground" && pokemon_type === "flying") || (move_type === "ghost" && pokemon_type === "normal")){
            return 0
        } else {
            return 1
        }
    }

    
    useEffect(() => {
        fetchAccounts()
        .then(data => {
            setAccount(data);
            setOurHealth(Math.round(data.ourPokemon[0].current_hp))
            setOpponent(data.opponents[data.opponents.findIndex(opponent => opponent.name === "PROF OAK")]);
            setOppHealth(Math.round(data.opponents[data.opponents.findIndex(opponent => opponent.name === "PROF OAK")].pokemon[0].current_hp))
        })
    }, [])
    
        const myHealthBar = {
            width: ((ourHealth / Math.round(account?.ourPokemon[0]?.stats[account.ourPokemon[0].stats.findIndex(stat => stat.stat.name === "hp")].base_stat!) * 100)) + "%"
        }
        
        const green = {
            background: "green"
        }
        
        const yellow = {
            background: "yellow"
        }
        
        const red = {
            background: "red"
        }
    
        const oppHealthBar = {
            width: ((oppHealth / Math.round(account?.opponents[account?.opponents.findIndex(opponent => opponent.name === "PROF OAK")].pokemon[0].stats[account?.opponents[account?.opponents.findIndex(opponent => opponent.name === "PROF OAK")].pokemon[0].stats.findIndex(stat => stat.stat.name === "hp")].base_stat!) * 100)) + "%"
        }

    useEffect(() => {
        getMoveData(ourAttackChoice)
        .then(data => {
            setOurAttack(data);
            setRandomNum((Math.floor(Math.random() * 38) + 1) + 217);
            setRandomNumCrit(Math.floor(Math.random() * 100) + 1);
            if (randomNumCrit <= 6) {
                setCrit(2)
            }
            setType1(testEffectiveness(ourAttack?.type?.name!, opponent?.pokemon[0].types[0]?.type?.name!));
            setType2(testEffectiveness(ourAttack?.type?.name!, opponent?.pokemon[0].types[1]?.type?.name!));
            /* setBattleDamage(((((((2 * account?.ourPokemon[0]?.level!)/5)+2)* ourAttack?.power! * (account?.ourPokemon[0].stats[account.ourPokemon[0].stats.findIndex(stat => stat.stat.name === "attack")].base_stat! / opponent?.pokemon[0].stats[opponent.pokemon[0].stats.findIndex(stat => stat.stat.name === "defense")].base_stat!)) / 50) + 2) * type1 * type2 * randomNum); */
            setBattleDamage(Math.round(((((((((2 * account?.ourPokemon[0]?.level!) / 5) + 2) * account?.ourPokemon[0].stats[account.ourPokemon[0].stats.findIndex(stat => stat.stat.name === "attack")].base_stat! * ourAttack?.power!) / opponent?.pokemon[0].stats[opponent.pokemon[0].stats.findIndex(stat => stat.stat.name === "defense")].base_stat!) / 50) + 2) * type1 * type2 * randomNum) / 255) * crit)
        })
    }, [ourAttackChoice, randomNum, randomNumCrit])


    return (
            gameState === "playing" ?
        <div className='BattleScreen'>
                <div className='battle-visual'>
                    <div className="battle-visual-top">
                        <div className="battle-visual-top-left">
                            <div className='battle-opponent-stats'>
                                <div className='battle-opponent-stats-top'>
                                    <div className='battle-stats-name-gender'>
                                        <p className='battle-name'>{opponent?.pokemon[0].name.toUpperCase()}</p> 
                                        {
                                            opponent?.pokemon[0].gender === "male" ?
                                            <img src={MaleSymbol} alt="male" className="battle-gender"/> :
                                            <img src={FemaleSymbol} alt="female" className="battle-gender"/> 
                                        }
                                    </div>
                                    <p className='battle-level'>Lv{opponent?.pokemon[0].level}</p>
                                </div>
                                <div className='battle-opponent-stats-bottom'>
                                    <div className='battle-health'>
                                        <p className='battle-health-p'>HP</p>
                                        <div className='battle-health-bar-outside'>
                                            <div style={oppHealthBar} className='battle-health-bar-inside'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='battle-visual-top-right'>
                            <img src={opponent?.pokemon[0].sprites.front_default} alt="Opponent-Pokemon" className="battle-pokemon-img"/>
                        </div>
                    </div>
                    <div className='battle-visual-bottom'>
                        <div className='battle-visual-bottom-left'>
                            <img src={account?.ourPokemon[0].sprites.back_default} alt="Our-Pokemon" className="battle-pokemon-img"/>
                        </div>
                        <div className='battle-visual-bottom-right'>
                            <div className='battle-our-pokemon-stats-and-exp'>
                                <div className='battle-our-pokemon-stats'>
                                    <div className='battle-our-pokemon-stats-top'>
                                        <div className='battle-stats-name-gender'>
                                            <p className='battle-name'>{account?.ourPokemon[0].name.toUpperCase()}</p>
                                            {
                                                account?.ourPokemon[0].gender === "male" ?
                                                <img src={MaleSymbol} alt="male" className="battle-gender"/> :
                                                <img src={FemaleSymbol} alt="female" className="battle-gender"/> 
                                            }
                                        </div>
                                        <p className='battle-level'>Lv{account?.ourPokemon[0].level}</p>
                                    </div>
                                    <div className='battle-our-pokemon-stats-bottom'>
                                        <div className='battle-health'>
                                            <p className='battle-health-p'>HP</p>
                                            <div className='battle-health-bar-outside'>
                                                <div style={myHealthBar} className='battle-health-bar-inside'></div>
                                            </div>
                                        </div>
                                        <p className='battle-health-numbers'>{ourHealth}/ {Math.round(account?.ourPokemon[0].stats[account?.ourPokemon[0].stats.findIndex(stat => stat.stat.name === "hp")].base_stat!)}</p>
                                    </div>
                                </div>
                                <div className='battle-our-pokemon-exp'>
                                    <p>EXP</p>
                                    <div className='battle-our-pokemon-exp-outside'>
                                        <div className='battle-our-pokemon-exp-inside'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    menu === "main-menu" ?
                    <div className='battle-words'>
                        <div className='battle-words-commentary'>
                            <p className='battle-commentary'>What will {account?.ourPokemon[0].name.toUpperCase()} do?</p>
                        </div>
                        <div className='battle-choices'>
                            <div className='battle-choices-top'>
                                <button onClick={() => setMenu("moves")}>FIGHT</button>
                                <button>BAG</button>
                            </div>
                            <div className='battle-choices-top'>
                                <button>POKEMON</button>
                                <button>RUN</button>
                            </div>
                        </div>
                    </div> :
                    menu === "moves" ?
                    <div className='battle-words'>
                        <div className='battle-choices'>
                            <div className='battle-choices-top'>
                                <button onClick={(e) => {
                                    setOurAttackChoice(account?.ourPokemon[0]?.moves[0]?.move.name!);
                                    console.log(`level: ${account?.ourPokemon[0]?.level!}; power: ${ourAttack?.power!}; attack stats: ${account?.ourPokemon[0].stats[account.ourPokemon[0].stats.findIndex(stat => stat.stat.name === "attack")].base_stat!}; defending stats: ${opponent?.pokemon[0].stats[opponent.pokemon[0].stats.findIndex(stat => stat.stat.name === "defense")].base_stat!}; type1: ${type1}; type2: ${type2}; random number: ${randomNum}; attack-name: ${ourAttack?.name}; battle damage: ${battleDamage}; opponent remaining health: ${oppHealth}`);
                                    setRandomNum(0);
                                    setOppHealth(oppHealth - battleDamage);
                                    setMenu("damage-1");
                                }}>{account?.ourPokemon[0].moves[0].move.name.toUpperCase()}</button>
                                <button>{account?.ourPokemon[0].moves[1].move.name.toUpperCase()}</button>
                            </div>
                            <div className='battle-choices-top'>
                            </div>
                        </div>
                        <div className='battle-words-commentary'>
                            <button className='battle-commentary' onClick={() => setMenu("main-menu")}>RETURN TO MAIN MENU</button>
                        </div>
                    </div> : 
                    menu === "damage-1" ?
                    <div className='battle-words'>
                        <div className='battle-choices'>
                            <div className='battle-choices-top'>
                                <p>You did {battleDamage} damage on your opponent's {opponent?.pokemon[0].name.toUpperCase()}</p>
                            </div>
                        </div>
                        <div className='battle-words-commentary'>
                            <button className='battle-commentary' onClick={() => {
                                if (oppHealth <= 0) {
                                    setGameState("won")
                                }
                                setOurAttackChoice(opponent?.pokemon[0]?.moves[0]?.move.name!);
                                setOurHealth(ourHealth - battleDamage);
                                console.log(`level: ${account?.ourPokemon[0]?.level!}; power: ${ourAttack?.power!}; attack stats: ${account?.ourPokemon[0].stats[account.ourPokemon[0].stats.findIndex(stat => stat.stat.name === "attack")].base_stat!}; defending stats: ${opponent?.pokemon[0].stats[opponent.pokemon[0].stats.findIndex(stat => stat.stat.name === "defense")].base_stat!}; type1: ${type1}; type2: ${type2}; random number: ${randomNum}; attack-name: ${ourAttack?.name}; battle damage: ${battleDamage}; opponent remaining health: ${oppHealth}`);
                                setRandomNum(0);
                                setMenu("damage-2");
                            }}>NEXT</button>
                        </div>
                    </div> : 
                    menu === "damage-2" ?
                    <div className='battle-words'>
                        <div className='battle-choices'>
                            <div className='battle-choices-top'>
                                <p>Your opponent's {opponent?.pokemon[0].name.toUpperCase()} did {battleDamage} damage on you</p>
                            </div>
                        </div>
                        <div className='battle-words-commentary'>
                            <button className='battle-commentary' onClick={() => {
                                if (ourHealth <= 0) {
                                    setGameState("lost")
                                }
                                setMenu("main-menu");
                            }}>NEXT</button>
                        </div>
                    </div> : 
                    <p></p>
                }
            </div> :
            gameState === "won" ?
            <div className='BattleScreen'>
                <h1>CONGRATS! YOU WON!</h1>
                <button>NEXT</button>
            </div> :
            gameState === "lost" ?
            <div className='BattleScreen'>
                <h1>OOPS! YOU LOST!</h1>
                <button><a href={`${url}tutorial-battle`}>TRY AGAIN</a></button>
            </div> :
            <p></p>
  )
}
