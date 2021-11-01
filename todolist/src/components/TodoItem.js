import React, {useRef} from 'react';
import {AiFillEdit} from "react-icons/ai";
import {IoCheckmark, IoCheckmarkDoneSharp, IoCloseSharp} from "react-icons/all";

const TodoItem = (props) => {


  const {item, updateTodo, removeTodo, completeTodo} = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({id, item: value});
      inputRef.current.disabled = true;
    }
  }
  return (
    <li key={item.id} className="card">
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
  <div className="btns">
    {item.completed === false &&
    <button
      style={{color : "green"}}
      onClick={() => changeFocus()}><AiFillEdit /></button>}
    <button
      style={{color : "red"}}
      onClick={() => completeTodo(item.id)}><IoCheckmarkDoneSharp/></button>
    <button onClick={() => removeTodo(item.id)}><IoCloseSharp/></button>
  </div>
      {item.completed && <span className="completed">done</span>}
    </li>
  );
};

export default TodoItem;
