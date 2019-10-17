import React, { useState, useEffect } from 'react'
import AnimalIndexTile from "./AnimalIndexTile"

const AnimalsIndexContainer = props => {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    fetch("/api/v1/animals.json")
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      setAnimals(body.animals)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const animalTiles = animals.map(animal => {
    return(
      <AnimalIndexTile
        key={animal.id}
        id={animal.id}
        name={animal.name}
        species={animal.species}
      />
    )
  })
  return(
    <div>
      {animalTiles}
    </div>
  )
}

export default AnimalsIndexContainer
