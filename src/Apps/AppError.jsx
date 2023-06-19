import "../styles.css"
import NavBar from "../Components/NavBar"

export default function AppError() {

  return (
    <div className="form-row">
      <h2>Error 404</h2>
      <p>Page not found
        <br></br>
        Are you sure the website URL is correct?
      </p>
      <NavBar name="Go back to the home page"/>
    </div>
  )
}