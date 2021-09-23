export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrei Ivanov', age: 33},
    {name: 'Alex Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. You are welcome!`)
}