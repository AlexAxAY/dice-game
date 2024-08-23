import "./Die.css";


export default function Die({ number, color }) {
    return (
        <div className="Die" style={{ backgroundColor: color }}>
            {number}
        </div>
    )
}