import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
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
  const [reviewFields, setReviewFields] = useState({
    rating: "",
    title: "",
    body: ""
  })
  const [reviews,setReviews] = useState([])
  const [errors, setErrors] = useState({})
  const [user, setUser] = useState({})
  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [cssDisplay, setCssDisplay] = useState("hide-review-form")

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
      setAnimal(body.animal)
      setReviews(body.reviews)
      setUser(body.current_user)
      setLoggedInStatus(body.logged_in)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const validForSubmission = () => {
    let submitErrors = {}

    const requiredFields = ["rating", "title", "body"]

    requiredFields.forEach(field => {
      if(reviewFields[field] === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "can't be blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleInputChange = event => {
    setReviewFields({
      ...reviewFields,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validForSubmission()) {
      addReview(reviewFields)
      setReviewFields({
        rating: "",
        title: "",
        body: ""
      })
    }
  }

  const addReview = (reviewFields) => {
    fetch(`/api/v1/animals/${animalId}/reviews`, {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(reviewFields),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
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
      if (body.review.id) {
        setReviews([...reviews, body.review])
      } else {
        setErrors(body.errors)
        setReviewFields(body.fields)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const showReviewForm = () => {
    if (loggedInStatus) {
      if (cssDisplay === "hide-review-form") {
        setCssDisplay("display-review-form")
      } else {
        setCssDisplay("hide-review-form")
      }
    } else {
      location.replace("/users/sign_in")
    }
  }

  return (
    <div className="row">
      <div className="columns small-6">
        <AnimalShowPage
          id={animal.id}
          name={animal.name}
          species={animal.species}
          sex={animal.sex}
          habitat={animal.habitat}
          diet={animal.diet}
          description={animal.description}
        />
        <div className="review-button">
          <button onClick={showReviewForm}>Add a Review</button>
        </div>
      </div>
      <div className="columns small-6">
        <div className={`${cssDisplay}`}>
          <ReviewForm
            reviewFields={reviewFields}
            errors={errors}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            name={animal.name}
          />
        </div>
      </div>

      <div>
        <AnimalReviewContainer
          reviews={reviews}
        />
      </div>
    </div>
  )
}

export default AnimalShowContainer
