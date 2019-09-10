import React, {useReducer} from 'react';
import './App.css';
import {reducer, initalState} from './reducers/reducers';
import TodoForm from './components/todoform';


function App() {
  console.log(initalState);

  

  const [state, dispatch] = useReducer(reducer, initalState)
  
  
  return (
    <div className="App">
      <h1> Todo </h1>

      <h3> {state.map(state => {
        return state.item + ', '
      })} </h3>

      <TodoForm/>
    </div>
  );
}

export default App;
