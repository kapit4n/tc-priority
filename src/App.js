import logo from './logo.svg';
import './App.css';
import TaskList from './components/task-list';
import tasksJson from './data/tasks.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        PRIORITY
      </header>
      <body className="App-body">
        <TaskList list={tasksJson} />
      </body>
    </div>
  );
}

export default App;
