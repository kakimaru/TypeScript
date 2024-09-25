import React from "react";
import './TodoList.css'
interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void
}

export default function TodoList({ items, onDeleteTodo }: TodoListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={onDeleteTodo.bind(null, item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
