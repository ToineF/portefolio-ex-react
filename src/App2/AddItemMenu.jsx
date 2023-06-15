import { useState } from "react"

export default function AddItemMenu({todos, setTodos}) {
    const [inputValue, setInputValue] = useState('')

    function createToDoItem(event) {
        event.preventDefault()
        if (inputValue === "") return
        setTodos(currentTodos => {
          return [ {text: inputValue, completed: false, id: crypto.randomUUID()}, ...currentTodos]
        })

        setInputValue("")
    }

    //console.log(todos)

    return(<form onSubmit={createToDoItem} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={inputValue} onChange={(e) => {
        setInputValue(e.target.value)
      }} type="text" id="item"></input>
      
    </div>
    <button className="btn">Add</button>
  </form>)
}