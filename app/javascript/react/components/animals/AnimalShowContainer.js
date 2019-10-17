import React, { useState, useEffect } from 'react'
import AnimalShowPage from './AnimalShowPage'

const AnimalShowContainer = props => {
  const [animal, setAnimal] = useState({
    name: "",
    species: "",
    sex: "",
    habitat: "",
    diet: "",
    description: ""
  })

  let animalId = props.match.params.id
  useEffect(() => {
    fetch(`/api/v1/animals/${animalId}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setAnimal(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return (
    <AnimalShowPage
      id={animal.id}
      name={animal.name}
      species={animal.species}
      sex={animal.sex}
      habitat={animal.habitat}
      diet={animal.diet}
      description={animal.description}
    />
  )
}

export default AnimalShowContainer
