import { type } from "os";
import React, { FunctionComponent, useRef } from "react";
import "./NewTodo.css";
type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};
const NewTodo: FunctionComponent<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text"> Todo text</label>
        <input type="text" id="todo-text" ref={textInputRef}></input>
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
