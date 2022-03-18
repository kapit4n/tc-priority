import Task from "./task";

export default function TaskList({ list, onUp, onDown, topicIndex }) {

    return (
        <div style={{ border: '1rem solid black', padding: '5rem' }}>
            <ol>
                {list.map((t, index) => <Task name={t} key={t}
                    onUp={index === 0 ? () => { } : () => onUp(topicIndex, index)}
                    onDown={index < list.length - 1 ? () => onDown(topicIndex, index) : () => { }} 
                    />)}
            </ol>
        </div>
    )
}
