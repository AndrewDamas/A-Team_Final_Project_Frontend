export default interface Account {
    _id?: string,
    email: string,
    username: string,
    password: string,
    ourPokemon: Pokemon[],
    character_name: string,
    badges: string[],
    bank: number,
    doneWithTutorial: boolean
}

export interface Pokemon {
    _id: number,
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

interface Move {
    move: {
        name: string
    },
    version_group_details: {
        level_learned_at: number,
        move_learn_method: {
            name: string
        },
        version_group: {
            name: string
        }
    }
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