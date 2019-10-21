import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import _ from "lodash"
import ErrorList from "../ErrorList"

const ReviewForm = props => {
  return(
    <div>
      <h2>Add a New Review</h2>
      <form onSubmit={props.handleSubmit} id="review-form">
        <ErrorList
          errors={props.errors}
        />
      <label htmlFor="title">Title:
          <input
            type="text"
            id="title"
            value={props.reviewFields.title}
            onChange={props.handleInputChange}
          />
        </label>

        <label htmlFor="rating">Rating:
          <select
            type="text"
            id="rating"
            value={props.reviewFields.rating}
            onChange={props.handleInputChange}
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
            value={props.reviewFields.body}
            onChange={props.handleInputChange}
          />
        </label>

        <input type="submit" value="Submit Review" />
      </form>
    </div>
  )
}

export default ReviewForm
