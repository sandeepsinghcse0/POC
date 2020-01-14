import React from "react";

const Todo = ({id, completed, text, onClick }) => {
  return (
    <li onClick={onClick}
     style={{
      textDecoration: completed ? "line-through" : "none"
    }}>
        {text}
    </li>
  );
};

export default Todo;
