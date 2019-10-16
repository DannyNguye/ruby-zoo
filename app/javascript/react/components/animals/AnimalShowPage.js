import React from 'react'

import { Link } from 'react-router-dom'

const AnimalShowPage = props => {

  return (
    <div>
      <h2>{props.name}</h2>
      <h3>Species: {props.species}</h3>
      <ul>
        <li>Sex: {props.sex}</li>
        <li>Habitat: {props.habitat}</li>
        <li>Diet: {props.diet}</li>
        <li>Description: {props.description}</li>
      </ul>

    <Link to="/">Home</Link>
    </div>
  )
}

export default AnimalShowPage
