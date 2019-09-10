import React, {useState, useReducer} from 'react'
import {reducer, initalState} from '../reducers/reducers';

const Todolist = () => {

    const [newtodo, setNewtodo] = useState('')
    const [state, dispatch] = useReducer(reducer, initalState)

    return(
        <div>
            <p>{state.map(state => {
                    return state.item + ', '
                })}</p>
        </div>
    )
}

export default Todolist