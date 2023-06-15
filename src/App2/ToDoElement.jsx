export default function ToDoElement({text, completed}) {
    return (
    <li>
        <label>
        <input type="checkbox"/>
          {text}
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>)
}