import data from "./data"
import Person from "./Person.jsx"

const PeopleList = () => {
  return (
    <div>
      {data.map((person) => {
        return <Person {...person} />
      })}
    </div>
  )
}

export default PeopleList
