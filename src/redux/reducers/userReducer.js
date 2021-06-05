const initialState = {
    users: [
        {
            id: 1,
            name: 'Sergei',
            age: 36,
        },
        {
            id: 2,
            name: 'Alex',
            age: 32,
        },
        {
            id: 3,
            name: 'Boris',
            age: 23,
        },
        {
            id: 4,
            name: 'Seraphim',
            age: 45,
        },
    ],
}

export default function userReducer(state = initialState, action) {
    return state
}