import React, { useContext, useEffect, useState } from 'react';
import "../styles/BattleScreen.css"
import MaleSymbol from "../images/gender-symbols/male-symbol.png";
import FemaleSymbol from "../images/gender-symbols/female-symbol.png";
import { fetchAccounts } from '../services/ourPokemonAPIService';
import Account from '../models/pokemonInterface';

export default function TutorialBattle() {
    const [account, setAccount] = useState<Account>();
    const [menu, setMenu] = useState("main-menu");
    const [battleWords, setBattleWords] = useState<string>("pokemon-choices")

    useEffect(() => {
        fetchAccounts()
        .then(data =>
          setAccount(data)  
        )
      })

    return (
        <div className='BattleScreen'>
            <div className='battle-visual'>
                <div className="battle-visual-top">
                    <div className="battle-visual-top-left">
                        <div className='battle-opponent-stats'>
                            <div className='battle-opponent-stats-top'>
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
                            <div className='battle-opponent-stats-bottom'>
                                <div className='battle-health'>
                                    <p className='battle-health-p'>HP</p>
                                    <div className='battle-health-bar-outside'>
                                        <div className='battle-health-bar-inside'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='battle-visual-top-right'>
                        <img src={account?.ourPokemon[0].sprites.front_default} alt="Opponent-Pokemon" className="battle-pokemon-img"/>
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
                                            <div className='battle-health-bar-inside'></div>
                                        </div>
                                    </div>
                                    <p className='battle-health-numbers'>{account?.ourPokemon[0].current_hp}/ {account?.ourPokemon[0].stats[account?.ourPokemon[0].stats.findIndex(stat => stat.stat.name === "hp")].base_stat}</p>
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
                            <button>{account?.ourPokemon[0].moves[0].move.name.toUpperCase()}</button>
                            <button>{account?.ourPokemon[0].moves[1].move.name.toUpperCase()}</button>
                        </div>
                        <div className='battle-choices-top'>
                        </div>
                    </div>
                    <div className='battle-words-commentary'>
                        <button className='battle-commentary' onClick={() => setMenu("main-menu")}>RETURN TO MAIN MENU</button>
                    </div>
                </div> : 
                <p></p>
            }
        </div>
  )
}
