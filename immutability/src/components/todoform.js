import React, {useReducer} from 'react'
import {reducer, initalState} from '../reducers/reducers';

const Todoform = () => {
    const [state, dispatch] = useReducer(reducer, initalState)

    return(
        <div>
            <h1>FORM</h1>
            <p>{state.item}</p>
            <input type="text" name="todo" placeholder="todo"></input>
            <button onClick={()=> dispatch({type: "ADD_TODO"})  }> ADD TODO </button>
        </div>
    )
}

export default Todoform;