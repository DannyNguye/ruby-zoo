import React from 'react'

const AnimalShowPage = props => {
  return (
    <div className="show-div">
      <h2>{props.name} the {props.species}</h2>
      <ul>
        <li className="attribute">Sex:</li>
          <li id="sex">{props.sex}</li>
          <br/>
        <li className="attribute">Habitat:</li>
          <li id="habitat">{props.habitat}</li>
          <br/>
        <li className="attribute">Diet:</li>
          <li id="diet">{props.diet}</li>
          <br/>
        <li className="attribute">Description:</li>
          <li id="description">{props.description}</li>
          <br/>
      </ul>
    </div>
  )
}

export default AnimalShowPage
