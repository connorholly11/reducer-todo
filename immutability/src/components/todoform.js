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
                <div>

                    {state.map(state => {
                        return (
                        <p className= {`${state.completed ? "completed" : ""}`} onClick={() => dispatch({type: "TOGGLE_TODO", payload:state.id})}> 
                            {state.item + ', '} 
                        </p>
                        )
                        })
                    }
                </div>
                <input type="text" name="todo" placeholder="todo" value={newtodo} onChange={handlechange}></input>
                <button onClick={()=> dispatch({type: "ADD_TODO", payload:newtodo})  }> ADD TODO </button>
                <button onClick={() => dispatch({type: "COMPLETED_TODO"})}> CLEAR COMPLETED TASKS </button>
            </form>
        </div>
    )
}

export default Todoform;