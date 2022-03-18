import './App.css';
import Topic from './components/topic';
import tasksJson from './data/tasks.json'
import { useState } from 'react';

function App() {

  const [topics, setTopics] = useState(tasksJson)

  const onUp = (index) => {

    const tasks = topics[0].tasks
    const movedUp = [...tasks.slice(0, index - 1), tasks[index], tasks[index - 1], ...tasks.slice(index + 1)]

    setTopics(topics => {
      return [{...topics[0], tasks: movedUp}]
    })
  }

  const onDown = (index) => {

    const tasks = topics[0].tasks
    const movedUp = [...tasks.slice(0, index), tasks[index + 1], tasks[index], ...tasks.slice(index + 2)]

    setTopics(topics => {
      return [{...topics[0], tasks: movedUp}]
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        PRIORITY
      </header>

      <div className="App-body">
        {topics.map((t, index) => <Topic topic={t} onUp={onUp} onDown={onDown} />)}

      </div>
    </div>
  );
}

export default App;
