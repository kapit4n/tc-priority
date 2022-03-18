export default function Task({ name }) {
    return (
        <div style={{ display: 'flex', width: '30rem', justifyContent: "space-between" }}>
            {name} <span>
                <button>UP</button>
                <button>DOWN</button>
            </span>
        </div>
    )
}
