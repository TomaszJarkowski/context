import React from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import TasksList from "./components/TasksList";
import NumberOfTasks from "./components/NumberOfTasks";
function App() {
  return (
    <div className="App">
      <header className="app__header">
        <h1 className="header__title">ToDoApp!</h1>
      </header>
      <main className="app__main">
        <NumberOfTasks />
        <ToDoForm />
        <TasksList />
      </main>
    </div>
  );
}

export default App;
