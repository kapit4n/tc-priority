import './App.css';
import Topic from './components/topic';
import tasksJson from './data/tasks.json'
import { useState } from 'react';

function App() {

  const [topics, setTopics] = useState(tasksJson)

  const onUp = (topicIndex, index) => {

    const tasks = topics[topicIndex].tasks
    const movedUp = [...tasks.slice(0, index - 1), tasks[index], tasks[index - 1], ...tasks.slice(index + 1)]
    topics[topicIndex].tasks = movedUp

    setTopics([...topics])
  }

  const onDown = (topicIndex, index) => {

    const tasks = topics[topicIndex].tasks
    const movedDown = [...tasks.slice(0, index), tasks[index + 1], tasks[index], ...tasks.slice(index + 2)]
    topics[topicIndex].tasks = movedDown

    setTopics([...topics])
  }

  return (
    <div className="App">
      <header className="App-header">
        PRIORITY
      </header>

      <div className="App-body">
        {topics.map((t, topicIndex) => <Topic topic={t} onUp={onUp} onDown={onDown} topicIndex={topicIndex}/>)}

      </div>
    </div>
  );
}

export default App;
