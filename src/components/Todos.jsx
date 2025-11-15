import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [newText, setNewText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setNewText(todo.text);
  };

  const saveUpdate = (id) => {
    dispatch(updateTodo({ id, text: newText }));
    setEditId(null);
  };

  return (
    <>
      <h1 className="text-3xl text-black font-semibold  text-center mt-10 mb-4 tracking-wide">
        📌 Your Todos
      </h1>

      <ul className="flex flex-col gap-4 max-w-xl mx-auto p-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-zinc-800 px-5 py-3 rounded-lg shadow-md hover:shadow-xl transition-all border border-zinc-700"
          >
            {editId === todo.id ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="px-2 py-1 rounded bg-zinc-700 text-white w-full mr-4"
              />
            ) : (
              <span className="text-white text-lg">{todo.text}</span>
            )}

            <div className="flex gap-3">
              {/* Delete Button */}
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              {/* Edit Button */}
              {editId === todo.id ? (
                <button
                  className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition"
                  onClick={() => saveUpdate(todo.id)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300 transition"
                  onClick={() => handleEdit(todo)}
                >
                  Edit
                </button>
              )}
              {/* <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border-black/20 items-center justify-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 "
                onClick={() => {
               
                  if (isTodoEditable) {
                    null;
                  } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
              >
                {isTodoEditable ? "📁" : "✏️"}
              </button> */}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
