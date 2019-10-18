import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AnimalShowPage from './AnimalShowPage'
import AnimalReviewContainer from './AnimalReviewContainer'
import ReviewForm from './ReviewForm'

const AnimalShowContainer = props => {
  const [animal, setAnimal] = useState({
    name: "",
    species: "",
    sex: "",
    habitat: "",
    diet: "",
    description: ""
  })
  const [reviews, setReviews] = useState([])
  const [user, setUser] = useState({})
  const [loggedInStatus, setLoggedInStatus] = useState(false)

  let animalId = props.match.params.id

  useEffect(() => {
    addReview()
  }, [])

  const addReview = () => {
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
      setAnimal(body.animal)
      setReviews(body.reviews)
      setUser(body.current_user)
      setLoggedInStatus(body.logged_in)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const showReviewForm = () => {
    if (loggedInStatus) {
      console.log("hi")
    } else {
      location.replace("/users/sign_in")
    }
  }

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
      <button onClick={showReviewForm}>Add a Review</button><br />
      <div>
        <ReviewForm
          animalId={animalId}
          addReview={addReview}
        />
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}

export default AnimalShowContainer
