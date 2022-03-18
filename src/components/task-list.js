import Task from "./task";

export default function TaskList({ list, onUp, onDown }) {

    return (
        <div style={{ border: '1rem solid black', padding: '5rem' }}>
            <ol>
                {list.map((t, index) => <Task name={t} key={t}
                    onUp={index === 0 ? () => { } : () => onUp(index)}
                    onDown={index < list.length - 1 ? () => onDown(index) : () => { }} 
                    />)}
            </ol>
        </div>
    )
}
