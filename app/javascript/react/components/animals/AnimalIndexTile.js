import React from 'react'
import { Link } from 'react-router-dom'

const AnimalIndexTile = props => {
  return(
    <div>
      <Link to={`/animals/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
        <p>
          {props.species}
        </p>
    </div>
  )
}

export default AnimalIndexTile
