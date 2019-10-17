import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimalShowPage from './AnimalShowPage'
import AnimalReviewContainer from './AnimalReviewContainer'

const AnimalShowContainer = props => {
  const [animal, setAnimal] = useState({
    name: "",
    species: "",
    sex: "",
    habitat: "",
    diet: "",
    description: ""
  })
  const [reviews,setReviews] = useState([])

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
      setAnimal(body["animal"])
      setReviews(body["reviews"])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return (
    <div>
      <div>
        <AnimalShowPage
          id={animal.id}
          name={animal.name}
          species={animal.species}
          sex={animal.sex}
          habitat={animal.habitat}
          diet={animal.diet}
          description={animal.description}
        />
      </div>
      <div>
        <AnimalReviewContainer
          reviews={reviews}
        />
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}

export default AnimalShowContainer
