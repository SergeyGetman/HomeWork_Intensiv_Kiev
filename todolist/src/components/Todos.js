import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { addTodos, removeTodos } from '../redux/reducer';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState('');

  const inputRef = useRef(true);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log('this props from store ', props);
  return (
    <div className="addTodos">
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        className="todo-input"
      />
      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button>
      <br />
      <ul>
        {props.todos.map((elem) => {
          return (
            <li key={elem.id}>
              <textarea
                ref={inputRef}
                disabled={inputRef}
                defaultValue={elem.item}
              />
              <button>Edit</button>
              <button onClick={() => props.removeTodo(elem.id)}>
                Delete
              </button>{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
