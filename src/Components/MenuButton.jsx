import { Link } from "react-router-dom"

export default function MenuButton({name, link}) {
    return(<Link  className="btn" to={link}>
    <h5>{name}</h5>
  </Link>)
}