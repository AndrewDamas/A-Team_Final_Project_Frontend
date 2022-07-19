import {Pokemon} from "../models/pokemonInterface";
import axios from "axios";
import Account from "../models/pokemonInterface";
import Opponent from "../models/OpponentInterface";
const baseUrl = process.env.REACT_APP_API_URL;


if (!baseUrl) {
    console.error("Missing config REACT_APP_OUR_POKEMON_API_URL");
}

export function fetchOpponents():Promise<Opponent[]>{
    return axios.get<Opponent[]>(`${baseUrl}/opponents`)
    .then(res => res.data);
}

export function setOakPokemon(pokemon: Pokemon){
    return axios.put(`${baseUrl}/set-oak`, pokemon)
    .then(response => response.data);
}