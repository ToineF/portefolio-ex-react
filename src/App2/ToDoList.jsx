import ToDoElement from "./ToDoElement"

export default function ToDoList() {
    return(<div>
            <h1 className="header0">Todo List</h1>
            <ul className="list">
                <ToDoElement/>
            </ul>
        </div>
    )
}