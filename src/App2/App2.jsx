import "../styles.css"
import { useState } from "react"
import { useEffect } from "react"
import AddItemMenu from "./AddItemMenu"
import ToDoList from "./ToDoList"
import MenuButton from "../MenuButton"


export default function App2() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((data) => data.todos.forEach(todo => {
          setTodos(current => {return [...current, {text: todo.todo, completed: false, id: todo.id}
        ]})
    }))
},[])

  return (
    <div className="form-row">
      <AddItemMenu todos={todos} setTodos={setTodos}/>
      <h1 className="header0">Todo List</h1>
      <ToDoList todos={todos} setTodos={setTodos}/>
      <MenuButton name="Menu" link ="../../index.html"/>
    </div>
  )
}