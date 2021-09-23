import {createGreetingMessage, ManType} from './05';


let people: Array<ManType> = [
    {name: 'Andrei Ivanov', age: 33},
    {name: 'Alex Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]

beforeEach(() => {
    people = [
        {name: 'Andrei Ivanov', age: 33},
        {name: 'Alex Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})

test('should get array of greeting messages', () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrei. You are welcome!')
    expect(messages[1]).toBe('Hello Alex. You are welcome!')
    expect(messages[2]).toBe('Hello Dmitry. You are welcome!')
})