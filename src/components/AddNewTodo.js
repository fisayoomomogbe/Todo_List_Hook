import React, { useState } from "react";

const AddNewTodo = ({ addTodo }) => {
  const [todos, setTodos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todos);
    setTodos("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo"> To do </label>
      <input
        type="text"
        id="todo"
        onChange={(e) => setTodos(e.target.value)}
        value={todos}
      />
      <input type="Submit" value="Submit" />
    </form>
  );
};

export default AddNewTodo;
