import "./Person.css"

const Person = ({ image, name, age }) => {
  return (
    <div className="person">
      <img alt="Person" src={image}></img>
      <div className="personInfo">
        <p>{name}</p>
        <small>{age}</small>
      </div>
    </div>
  )
}

export default Person
