export default function ToDoElement({text, completed}) {
    return (
    <li>
        <label>
        <input type="checkbox"/>
          {text}
        </label>
        <button className="btn btn-danger" onClick={console.log("toto")}>Delete</button>
      </li>)
}