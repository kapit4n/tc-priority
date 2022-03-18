import logo from './logo.svg';
import './App.css';
import TaskList from './components/task-list';
import tasksJson from './data/tasks.json'
import { useState } from 'react';

function App() {

  const [tasksJsonState, setTasksJsonState] = useState(tasksJson)

  const onUp = (index) => {
    setTasksJsonState(tasks => {
      return [...tasks.slice(0, index - 1), tasks[index], tasks[index - 1], ...tasks.slice(index + 1)]
    })
  }

  const onDown = (index) => {
    setTasksJsonState(tasks => {
      return [...tasks.slice(0, index), tasks[index + 1], tasks[index], ...tasks.slice(index + 2)]
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        PRIORITY
      </header>

      <div className="App-body">
        <TaskList list={tasksJsonState} onUp={onUp} onDown={onDown} />
      </div>
    </div>
  );
}

export default App;
