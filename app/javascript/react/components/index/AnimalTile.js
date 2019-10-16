import React from 'react'

const AnimalTile = props => {
  return(
    <div>
      <h3>{props.name}</h3>
        <p>
          {props.species}
        </p>
    </div>
  )
}

export default AnimalTile
