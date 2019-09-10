import React, {useState, useReducer} from 'react'
import {reducer, initalState} from '../reducers/reducers';

const Todoform = () => {

    const [newtodo, setNewtodo] = useState('')
    const [state, dispatch] = useReducer(reducer, initalState)
    console.log('state',state)

    const handlechange = e => {
        setNewtodo(e.target.value)
    }

    return(
        <div>
            <h1>FORM</h1>
            <p>{state.item}</p>
            <input type="text" name="todo" placeholder="todo" value={newtodo} onChange={handlechange}></input>
            <button onClick={()=> dispatch({type: "ADD_TODO", payload:newtodo})  }> ADD TODO </button>
        </div>
    )
}

export default Todoform;