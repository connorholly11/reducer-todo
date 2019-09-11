import React, {useReducer} from 'react';
import './App.css';
import {reducer, initalState} from './reducers/reducers';
import TodoForm from './components/todoform';
import Todolist from './components/todolist';


function App() {
  console.log(initalState);
  
  
  return (
    <div className="App">
      <h1> Todo </h1>

      <TodoForm/>
    </div>
  );
}

export default App;
