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
    .then((data) => {
      const newTodo = []
      data.todos.forEach(todo => {
        newTodo.push({text: todo.todo, completed: false, id: todo.id})
        setTodos(() => newTodo)
    })})
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