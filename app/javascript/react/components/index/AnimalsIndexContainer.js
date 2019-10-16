import React, { useState, useEffect } from 'react'
import AnimalTile from "./AnimalTile"

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
      setAnimals(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const animalTile = animals.map(animal => {
    return(
      <AnimalTile
        key={animal.id}
        name={animal.name}
        species={animal.species}
        sex={animal.sex}
        habitat={animal.habitat}
        diet={animal.diet}
        description={animal.description}
      />
    )
  })
  return(
    <div>
      {animalTile}
    </div>
  )
}

export default AnimalsIndexContainer
