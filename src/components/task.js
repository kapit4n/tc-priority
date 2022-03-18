export default function Task({ name, onUp, onDown }) {
    return (
        <li>
            <div style={{ display: 'flex', width: '30rem', justifyContent: "space-between" }}>
                {name} <span>
                    <button onClick={onUp}>UP</button>
                    <button onClick={onDown}>DOWN</button>
                </span>
            </div>
        </li>
    )
}
