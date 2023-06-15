import { useState } from "react"

export default function AddItemMenu() {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])

    function createToDoItem(event) {
        event.preventDefault()
        if (inputValue === "") return
        setTodos(currentTodos => {
          return [ ...currentTodos, {text: inputValue, completed: false, id: crypto.randomUUID()}]
        })

        setInputValue("")
    }

    console.log(todos)

    return(<form onSubmit={createToDoItem} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={inputValue} onChange={(e) => {
        setInputValue(e.target.value)
      }} type="text" id="item"></input>
      {/* {todos.map(todo => {
        return (
          <button className="btn">{todo.text}</button>
        )
      })} */}
    </div>
    <button className="btn">Add</button>
  </form>)
}