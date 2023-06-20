import "../styles.css"
import MenuButton from "../Components/MenuButton"

export default function AppHome() {
  return (
    <>
    <div className="form-row wrapper">
      <MenuButton name="EX 1 : Counter" link="/ex1"/>
      <MenuButton name="EX 2 : To Do List" link="/ex2"/>
      <MenuButton name="EX 3 : Celsius Fahrenheit Conversion" link="/ex3"/>
      <MenuButton name="EX 4 : Books List" link="/ex4"/>
      <MenuButton name="EX 5 : Star Wars Characters" link="/ex5"/>
    </div>
    </>
  )
}