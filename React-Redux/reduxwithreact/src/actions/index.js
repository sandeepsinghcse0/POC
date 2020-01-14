let nextTodo = 0;

export const addTodo = text => {
  return {
    type: "ADD_TODO",
    id: nextTodo++,
    text
  };
};

export const toggleToDo = id => ({ type: "TOGGLE_TODO", id });
