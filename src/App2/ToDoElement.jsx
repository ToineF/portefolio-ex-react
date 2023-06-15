export default function ToDoElement({text}) {
    return (
    <li>
        <label>
          <input type="checkbox"></input>
          {text}
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>)
}