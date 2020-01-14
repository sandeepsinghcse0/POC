import React from 'react';
import './App.css';
import AddTodo from '../container/AddToDo';
import VisibleToDo from '../container/VisibleToDo'

function App() {
  return (
    <div className="App">
        <AddTodo/>
        <VisibleToDo/>
    </div>
  );
}

export default App;
