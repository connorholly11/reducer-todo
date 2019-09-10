import React, {useState, useReducer} from 'react'
import {reducer, initalState} from '../reducers/reducers';

const Todoform = () => {

    const [newtodo, setNewtodo] = useState('')
    const [state, dispatch] = useReducer(reducer, initalState)
    console.log('state',state)

    const handlechange = e => {
        // setNewtodo(e.target.value)
        let value = e.target.value;
            if (value !== null) {
                setNewtodo(value)
            }
    }

    const handleSubmit = e => {
        e.preventDefault();
    }


    return(
        <div>
            <h1>FORM</h1>
            <form onSubmit={handleSubmit}>
                <p>{state.map(state => {
                    return state.item + ', '
                    })}</p>
                {/* <p>{state.item}</p> */}
                <input type="text" name="todo" placeholder="todo" value={newtodo} onChange={handlechange}></input>
                <button onClick={()=> dispatch({type: "ADD_TODO", payload:newtodo})  }> ADD TODO </button>
            </form>
        </div>
    )
}

export default Todoform;