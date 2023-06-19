import MenuButton from "./MenuButton"
import { Outlet } from "react-router-dom"

export default function NavBar() {
    return(
    <>
    <Outlet/>
    <div className="form-row">
        <br></br>
        <MenuButton name="Menu" link="/"/>
    </div>
    </>)
}