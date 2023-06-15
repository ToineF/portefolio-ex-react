
export default function MenuButton({name, link}) {
    return(<a class="btn" href={link}>
    <h5>{name}</h5>
  </a>)
}