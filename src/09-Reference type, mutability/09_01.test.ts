function increaseAge(u: UserType) {
    u.age++;
}

export type UserType = {
    name: string
    age: number
    address: {title: string}
}

test('reference type test', () => {

    let user: UserType = {
        name: 'Andrei',
        age: 29,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user);

    expect(user.age).toBe(30);

    const superman = user

    superman.age = 1000;

    expect(user.age).toBe(1000)
})

test('array test', () => {
    var users = [
        {
            name: 'Andrey',
            age: 29
        },
        {
            name: 'Vika',
            age: 24
        }
    ]
    var admins = users;

    admins.push({name: 'Bandit', age: 10})

    expect(users[2]).toEqual({name: 'Bandit', age: 10})

})

test('value test', () => {
    let usersCount = 100;
    let adminsCount = usersCount;

    adminsCount = adminsCount + 1;

    expect(adminsCount).toBe(101);

})

test('reference type test', () => {

    let user: UserType = {
        name: 'Andrei',
        age: 29,
        address: {
            title: 'Minsk'
        }
    }

    // let addr = user.address

    let user2: UserType = {
        name: 'Vika',
        age: 24,
        address: user.address
    }

    user2.address.title = 'Minsk City';

    expect(user.address).toBe(user2.address);
    expect(user.address.title).toBe('Minsk City');
})

test('reference type array test', () => {

    let user: UserType = {
        name: 'Andrei',
        age: 29,
        address: {
            title: 'Minsk'
        }
    }

    // let addr = user.address

    let user2: UserType = {
        name: 'Vika',
        age: 24,
        address: user.address
    }

    const users = [user, user2, {name: 'Arseny', age: 0, address: user.address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'


    expect(users[0].name).toBe('Dmitry');
    expect(user.name).toBe('Dmitry');
})