import "../styles.css"
import AddItemMenu from "./AddItemMenu"
import ToDoList from "./ToDoList"
import MenuButton from "../MenuButton"

export default function App2() {
  return (
    <div className="form-row">
      <AddItemMenu/>
      <ToDoList/>
      <MenuButton name="Menu" link ="../../index.html"/>
    </div>
  )
}