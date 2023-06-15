export default function ToDoElement({text, id, setTodos}) {
    return (
    <li>
        {text}
        <button className="btn btn-danger" onClick={() => setTodos(current => {return current.filter(todo => id !== todo.id)})}>
          Delete</button>
      </li>)
}