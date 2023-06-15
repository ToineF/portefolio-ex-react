
export default function MenuButton({name, link}) {
    return(<a  className="btn" href={link}>
    <h5>{name}</h5>
  </a>)
}