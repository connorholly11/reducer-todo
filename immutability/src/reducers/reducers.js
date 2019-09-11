

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
        case "TOGGLE_TODO":
            let clicknewState = 
            state.map(state => {
                if (state.id === action.payload){
                    return{
                        ...state,
                        completed: !state.completed,
                        // className='completed'
                    }
                    }else{
                        return state
                }
            })
            return clicknewState;

        case "COMPLETED_TODO":
            let completed = 
            state.filter(state => {
                if (state.completed === true){
                    return !state.completed
                }else{
                    return state
                }
            })
            return completed
        

    default: return state;
    }
}