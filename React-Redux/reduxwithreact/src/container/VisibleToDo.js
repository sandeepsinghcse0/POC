import { connect } from "react-redux";
import TodoList from "../component/ToDoList.js";
import { toggleToDo } from "../actions";

const getVisibleTodos = todos => {
  return todos;
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos)
});

const mapDispatchToProps = dispatch => ({
  toggleToDo: id => dispatch(toggleToDo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
