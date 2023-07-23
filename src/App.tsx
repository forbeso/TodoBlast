import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./todo_list";

function App() {
  return (
    <div className="App">
      <h1 className="mt-5 mb-5 text-2xl font-bold">SUPERCHARGED ⚡️ TODO 💡</h1>
      <TodoList />
    </div>
  );
}

export default App;
