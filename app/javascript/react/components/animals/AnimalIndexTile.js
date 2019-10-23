import React from 'react'
import { Link } from 'react-router-dom'
import AdminButtonTile from './AdminButtonTile'

const AnimalIndexTile = props => {
  let buttons
  if(props.showButton){
    buttons = <AdminButtonTile />
  }
  return(
    <div className="columns large-3 small-12 animal-tile">
      <h4>{props.name}</h4>
      <h5>{props.species}</h5>
      {buttons}
      <div className="animal-tile-image">
        <img className="animal-image-sizer" src={props.imageUrl}/>
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
