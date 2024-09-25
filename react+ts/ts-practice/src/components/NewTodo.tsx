import React, { useRef } from "react";
import './NewTodo.css'

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

export default function NewTodo({ onAddTodo }: NewTodoProps) {
  const textInputRef = useRef<HTMLInputElement>(null);

  function todoSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
    textInputRef.current!.value = ''
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}
