import Task from "./task";

export default function TaskList({ list }) {
    return (
        <div style={{border: '1rem solid black', padding: '5rem'}}>
            {list.map(t => <Task name={t} />)}
        </div>
    )
}
