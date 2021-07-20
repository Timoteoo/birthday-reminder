import Person from "./Person.jsx"
import RemoveAll from "./RemoveAll.jsx"
import { useState } from "react"
import data from "./data.json"

const PeopleList = () => {
  const [people, setPeople] = useState(data)

  const removePeople = () => {
    setPeople([])
  }

  return (
    <div>
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        return <Person key={person._id} {...person} />
      })}
      <div onClick={removePeople}>
        <RemoveAll />
      </div>
    </div>
  )
}

export default PeopleList
