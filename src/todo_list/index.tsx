import React, { useState } from "react";
import "./todo.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [item, setItem] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [addError, setAddError] = useState<boolean>(false);

  const [todos, setTodos] = useState<Task[]>([
    {
      id: 1,
      text: "Add your first todo",
      completed: false,
    },
    {
      id: 2,
      text: "Check off completed tasks",
      completed: false,
    },
    {
      id: 3,
      text: "Edit or delete todos",
      completed: false,
    },
    {
      id: 4,
      text: "Prioritize your tasks",
      completed: false,
    },
    {
      id: 5,
      text: "Stay organized and productive",
      completed: false,
    },
  ]);

  //add a new item to the the list
  const handleAddItem = () => {
    if (!item) {
      setAddError(true);
    } else {
      const newTodo: Task = {
        id: Date.now(),
        text: item,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setItem("");
      setAddError(false);
    }
  };

  const handleRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //mark as complete or incomplete  --strikethrough for now
  const handleRemoveItem = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className="flex justify-center">
      <div className="todo-container box-border box-sizing p-2  w:full md:w-3/4 bg-yellow-50">
        <h1 className="mb-5 mt-5">
          Supercharge Your Productivity: Introducing the Ultimate Todo List Web
          App for Goal-Getters!
        </h1>

        <div className="mb-5 box-content">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search todos"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-2 p-2"
              value={searchQuery}
            />
          </div>
          <ul className="">
            {todos
              .filter((todo) =>
                todo.text.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((todo) => (
                <li
                  className="mb-5 p-2 bg-lime-300"
                  key={todo.id}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}>
                  {todo.text}
                  <div>
                    <span
                      className="font-bold text-white bg-lime-950 px-2 py-1 rounded"
                      // key={todo.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRemoveItem(todo.id)}>
                      ✔
                    </span>
                    &nbsp;
                    <span
                      className="font-bold text-white bg-orange-500 px-2 py-1 rounded"
                      // key={todo.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRemove(todo.id)}>
                      X
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter your todo item here"
            onChange={(e) => setItem(e.currentTarget.value)}
            className="border-2 p-2"
            value={item}
          />
          {addError && (
            <p className="text-red-500 font-bold">
              Add a todo to see it in your list.
            </p>
          )}
        </div>

        <button
          onClick={() => handleAddItem()}
          type="button"
          className="btn bg-blue-500 p-2 w-32 text-white">
          Add
        </button>
      </div>
    </div>
  );
};
