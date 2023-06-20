import MenuButton from "./MenuButton"
import { Outlet } from "react-router-dom"

export default function NavBar({name="Menu", link="/"}) {
    return(
    <div className="form-row wrapper">
        <Outlet/>
        <div className="form-row">
            <br></br>
            <MenuButton name={name} link={link}/>
        </div>
    </div>)
}