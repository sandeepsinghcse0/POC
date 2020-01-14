import React from "react";
import Todo from "./Todo";
import {toggleToDo} from '../actions'
import { connect } from "react-redux";

const ToDoList = ({ todos, toggleToDo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick = {()=>toggleToDo(todo.id)}
        />
      ))}
    </ul>
  );
};
export default ToDoList;
