export default interface MoveDetails {
    id: number,
    name: string,
    accuracy: number,
    damage_class: {
        name: string
    },
    meta: {
        ailment: {
            name: string
        }
    },
    pp: number,
    power: number,
    stat_changes: [
        {
            change: number,
            stat: {
                name: string
            }
        }
    ],
    type: {
        name: string
    }
}