import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addtodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex justify-center items-center mt-12 gap-3"
    >
      <input
        type="text"
        className="bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-100 py-2 px-4 w-80 shadow transition-all duration-200 placeholder-gray-400"
        placeholder="✏️  Enter a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-600 border-0 py-2 px-6 rounded-lg shadow hover:bg-indigo-700 transition-all duration-200"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
