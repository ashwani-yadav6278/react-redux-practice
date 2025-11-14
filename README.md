## Project Name

A simple and modern React application built using Redux Toolkit, React Hooks, and Tailwind CSS.

## Features

Add Todo

Delete Todo

Update Todo (Inline editing)

State management with Redux Toolkit

Fully responsive UI using Tailwind CSS

Clean folder structure

# Tech Stack

React

Redux Toolkit

React Hooks

Tailwind CSS

Vite / CRA (choose your setup)

JavaScript (ES6+)

## Folder Structure
project-folder/
│
├── src/
│   ├── features/
│   │   └── todo/
│   │       ├── todoSlice.js
│   │ 
│   ├── components/
│   │   └── Todos.jsx
│   │ 
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── README.md
└── vite.config.js / or CRA config

## How It Works
🔹 Add Todo

User enters text → triggers addTodo() → Redux updates the state → UI re-renders.

🔹 Delete Todo

Click delete → dispatch(deleteTodo(id)) → todo removed from store.

🔹 Update Todo (Inline Editing)

Click Edit → input box appears

Edit text → click Save → updateTodo({ id, text })

## Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you’d like to change.