import {Pokemon} from "../models/pokemonInterface";
import axios from "axios";

export function getSpecificPokemon(pokemon_name:string):Promise<Pokemon>{
    return axios
    .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
    .then(response => response.data)
}