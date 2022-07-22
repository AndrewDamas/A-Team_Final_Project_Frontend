import {Pokemon} from "../models/pokemonInterface";
import axios from "axios";
import Account from "../models/pokemonInterface";
const baseUrl = process.env.REACT_APP_API_URL;


if (!baseUrl) {
    console.error("Missing config REACT_APP_OUR_POKEMON_API_URL");
}

export function fetchAccounts():Promise<Account>{
    return axios.get<Account[]>(`${baseUrl}/accounts`)
    .then(res => {return res.data[0]});
}

export function addPokemon(pokemon: Pokemon){
    return axios.put(`${baseUrl}`, pokemon)
    .then(response => response.data);
}

export function setOakPokemon(pokemon: Pokemon){
    return axios.put(`${baseUrl}/set-oak`, pokemon)
    .then(response => response.data);
}

export function calculateOurBattleDamage(battleDamage: number){
    return axios.put(`${baseUrl}/our-battle-damage`, battleDamage)
    .then(response => response.data);
}

export function setStats(){

}
