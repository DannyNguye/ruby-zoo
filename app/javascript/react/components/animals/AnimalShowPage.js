import React from 'react'

const AnimalShowPage = props => {
  return (
    <div className="show-div">
      <h2>{props.name} the {props.species}</h2>
      <ul>
        <li className="attribute">Sex:</li>
          <li>{props.sex}</li>
          <br/>
        <li className="attribute">Habitat:</li>
          <li>{props.habitat}</li>
          <br/>
        <li className="attribute">Diet:</li>
          <li>{props.diet}</li>
          <br/>
        <li className="attribute">Description:</li>
          <li>{props.description}</li>
          <br/>
      </ul>
    </div>
  )
}

export default AnimalShowPage
