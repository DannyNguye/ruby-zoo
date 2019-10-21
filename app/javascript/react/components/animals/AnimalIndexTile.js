import React from 'react'
import { Link } from 'react-router-dom'

const AnimalIndexTile = props => {
  let buttons
  if(props.showButton){
    buttons = <div><button>Edit</button><br/><button>Delete</button></div>
  }
  return(
    <div className="columns large-3 small-12 animal-tile">
      <h4>{props.name}</h4>
      <h5>{props.species}</h5>
      {buttons}
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
