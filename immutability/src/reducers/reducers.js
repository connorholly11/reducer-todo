

export const initalState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    },
    {
    item: 'Learn about react',
    completed: false,
    id: 3892987588
    },
    {
    item: 'Learn about javascript',
    completed: false,
    id: 3892987587
}
]

export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
        return [
            ...state,
            {
            item: action.payload,
            completed:false,
            id: Date.now()
        }
    ]

    default: return state;
    }
}