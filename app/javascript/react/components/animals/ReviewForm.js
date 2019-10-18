import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import _ from "lodash"
import ErrorList from "../ErrorList"

const ReviewForm = props => {
  const [reviewFields, setReviewFields] = useState({
    rating: "",
    title: "",
    body: ""
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = event => {
    setReviewFields({
      ...reviewFields,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

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

  const handleSubmit = event => {
    event.preventDefault()
    if (validForSubmission()) {
      fetch(`/api/v1/animals/${props.animalId}/reviews`, {
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
        if (body.id) {
          props.addReview()
        } else {
          setErrors(body.errors)
          setReviewFields(body.fields)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

      setReviewFields({
        rating: "",
        title: "",
        body: ""
      })
    }
  }

  return(
    <div>
      <h2>Add a New Review</h2>
      <form onSubmit={handleSubmit}>
        <ErrorList
          errors={errors}
        />
        <label htmlFor="title">Title:
          <input
            type="text"
            id="title"
            value={reviewFields.title}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="rating">Rating:
          <select
            type="text"
            id="rating"
            value={reviewFields.rating}
            onChange={handleInputChange}
          >
            <option value="">Choose One</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        <label htmlFor="body">Review:
          <input
            type="text"
            id="body"
            value={reviewFields.body}
            onChange={handleInputChange}
          />
        </label>

        <input type="submit" value="Add Review" />
      </form>
    </div>
  )
}

export default ReviewForm
