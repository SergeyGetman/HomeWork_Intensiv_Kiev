import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  addTodos,

} from '../redux/reducer';
import {GoPlus} from "react-icons/go";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),

  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState('');

  const add = () => {
    props.addTodo({
      id: Math.floor(Math.random() * 1000),
      item: todo,
      completed: false,
    })
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="addTodos">
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        className="todo-input"
        value={todo}
      />
      <button
        className="add-btn"
        onClick={() =>
          add()
        }
      >
        <GoPlus/>
      </button>
      <br/>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
