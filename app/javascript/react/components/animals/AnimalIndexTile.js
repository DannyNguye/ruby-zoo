import React from 'react'
import { Link } from 'react-router-dom'

const AnimalIndexTile = props => {
  return(
    <div className="columns large-3 small-12 animal-tile">
        <h4>{props.name}</h4>
        <h5>{props.species}</h5>
      <div className="animal-tile-image">
        <img src="https://via.placeholder.com/150"/>
      </div>
      <div className="detail-button-container">
        <Link className="button detail-button" to={`/animals/${props.id}`}>
          View Details
        </Link>
      </div>
    </div>
  )
}

export default AnimalIndexTile
