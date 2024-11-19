import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm'; 
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1> 
      </header>
      <main>
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
