import {Pokemon} from "../models/pokemonInterface";
import axios from "axios";
import MoveDetails from "../models/moveInterface";

export function getSpecificPokemon(pokemon_name:string):Promise<Pokemon>{
    return axios
    .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
    .then(response => response.data)
}

export function getMoveData(move_name: string):Promise<MoveDetails>{
    return axios
    .get<MoveDetails>(`https://pokeapi.co/api/v2/move/${move_name}/`)
    .then(response => response.data)
}