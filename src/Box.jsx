import "./Box.css"
import PeopleList from "./PeopleList.jsx"
import { Fade } from "react-awesome-reveal"

const Box = () => {
  return (
    <Fade>
      <section className="birthdayBox">
        <PeopleList />
      </section>
    </Fade>
  )
}

export default Box
