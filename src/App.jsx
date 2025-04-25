import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy Groceries" },
    { id: 2, text: "Clean the House" },
    { id: 3, text: "Prepare Presentation" }
  ]);

  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, updatedText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: updatedText } : task
    ));
    setTaskToEdit(null);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-heading">To-do-List</h1>
      <TaskForm addTask={addTask} taskToEdit={taskToEdit} editTask={editTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={setTaskToEdit} />
    </div>
  );
}

export default App;