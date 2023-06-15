import "../styles.css"
import { useState } from "react"
import AddItemMenu from "./AddItemMenu"
import ToDoList from "./ToDoList"
import MenuButton from "../MenuButton"


export default function App2() {
  

  return (
    <div className="form-row">
      <AddItemMenu/>
      <h1 className="header0">Todo List</h1>
      <ToDoList/>
      <MenuButton name="Menu" link ="../../index.html"/>
    </div>
  )
}