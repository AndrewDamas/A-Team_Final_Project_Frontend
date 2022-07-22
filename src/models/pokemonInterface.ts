export default interface Account {
    _id: string,
    email: string,
    username: string,
    password: string,
    ourPokemon: Pokemon[],
    character_name: string,
    badges: string[],
    bank: number,
    doneWithTutorial: boolean,    
    opponents: Opponent[],
}

export interface Opponent{
    name: string,
    pokemon: Pokemon[],
    defeated: boolean
}

export interface Pokemon {
    active: boolean,
    id: number,
    level: number,
    gender: string,
    current_hp: number,
    base_experience: number,
    moves: Move[],
    name: string,
    species: {
        url: string
    },
    sprites: Sprites,
    stats: Stat[],
    types: Type[]
}

export interface Move {
    move: {
        name: string,
        url: string
    },
    version_group_details: [
        {
            level_learned_at: number,
            move_learn_method: {
                name: string
            },
            version_group: {
                name: string
            }
        }
    ]
}

interface Sprites {
    back_default: string,
    back_female: string,
    front_default: string,
    front_female: string
}

interface Stat {
    base_stat: number,
    stat: {
        name: string
    }
}

interface Type {
    type: {
        name: string,
    }
}