import data from "./data.json"
import Person from "./Person.jsx"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const buttonStyles = makeStyles({
  button: {
    background: "linear-gradient(to right, #c0392b, #8e44ad)",
    width: "140px",
    height: "38px",
    color: "white",
    fontWeight: "bold",
    marginTop: "20px",
  },
})

const RemoveAll = () => {
  const classes = buttonStyles()
  return <Button className={classes.button}>Remove all</Button>
}

const PeopleList = () => {
  return (
    <div>
      <h3>{data.length} birthdays today</h3>
      {data.map((person) => {
        return <Person key={person._id} {...person} />
      })}
      <RemoveAll />
    </div>
  )
}

export default PeopleList
