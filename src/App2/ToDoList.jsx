import ToDoElement from "./ToDoElement"


export default function ToDoList({todos}) {
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
                {todos.map(todo => {
                    return (
                    <ToDoElement text= {todo.text}/>
                    )
                })}
            </ul>
    )
}