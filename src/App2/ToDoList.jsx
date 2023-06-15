import ToDoElement from "./ToDoElement"

export default function ToDoList({todos, setTodos}) {

    return(<ul id="todoContainer" className="list">
                {todos.map(todo => {
                    return (
                    <ToDoElement text= {todo.text} id={todo.id}  key={todo.id} completed={todo.completed} setTodos={setTodos}/>
                    )
                })}
            </ul>
    )
}