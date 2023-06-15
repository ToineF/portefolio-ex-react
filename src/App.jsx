import "./styles.css"
import MenuButton from "./MenuButton"

export default function App() {
  return (
    <>
    <div className="form-row">
      <MenuButton name="EX 1 : Counter" link="/src/App1/App1.html"/>
      <MenuButton name="EX 2 : To Do List" link="/src/App2/App2.html"/>
    </div>
    </>
  )
}