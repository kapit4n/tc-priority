import TaskList from "./task-list";

export default function Topic({ topic, onUp, onDown, topicIndex }) {
    return (
        <div>
            {topic.name}
            <TaskList list={topic.tasks} onUp={onUp} onDown={onDown} topicIndex={topicIndex} />
        </div>
    )
}