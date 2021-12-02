import React from "react";
import { useState } from "react";
import "./todoAddForm.css";

export default function TodoAddForm({ addTodo }) {
  const [todo, setTodo] = useState("");
  function onSubmit(event) {
    event.preventDefault();
    addTodo(todo);
    setTodo("");
  }
  return (
    <div className="todo-add-form mt-2 d-flex">
      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          placeholder="What need to be done"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        ></input>
        <button type="submit" className="btn btn-outline-primary btn-sm">
          Add Item
        </button>
      </form>
    </div>
  );
}
