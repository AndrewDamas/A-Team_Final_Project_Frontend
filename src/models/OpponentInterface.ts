import { Pokemon } from "./pokemonInterface";

export default interface Opponent{
    _id: string
    name: string,
    pokemon: Pokemon[]
}