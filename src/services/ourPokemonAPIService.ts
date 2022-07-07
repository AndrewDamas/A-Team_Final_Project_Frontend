import Pokemon from "../models/pokemonInterface";
import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;


if (!baseUrl) {
    console.error("Missing config REACT_APP_OUR_POKEMON_API_URL");
}

export function fetchOurPokemon():Promise<Pokemon[]>{
    return axios.get<Pokemon[]>(`${baseUrl}/our_pokemon`)
    .then(res => res.data);
}