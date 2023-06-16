import "../styles.css"
import MenuButton from "../Components/MenuButton"

export default function AppHome() {
  return (
    <>
    <div className="form-row">
      <MenuButton name="EX 1 : Counter" link="/ex1"/>
      <MenuButton name="EX 2 : To Do List" link="/ex2"/>
      <MenuButton name="EX 3 : Celsius Fahrenheit Conversion" link="/ex3"/>
    </div>
    </>
  )
}