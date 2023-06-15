import ToDoElement from "./ToDoElement"


export default function ToDoList() {
    // fetch("https://dummyjson.com/todos")
    // .then((res) => res.json())
    // .then((data) => data.todos.forEach(todo => {
    //     todos.push(todo)
    // }))
    // .then(() => {
    //     setTodos(todos, todos.map(todo => JSON.stringify(<ToDoElement key={item.id} text={todo.todo}/>)))
    // })

    
    // todos.map((todo)=> {
    //     <ToDoElement key={item.id} text={todo.todo} />
    // })
    //{todos[1].todo}
    
    return(<ul id="todoContainer" className="list">
                <ToDoElement text= ""/>
                <ToDoElement text="Item 2"/>
            </ul>
    )
}