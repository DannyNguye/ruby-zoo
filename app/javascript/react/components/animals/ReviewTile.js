import React from 'react'

const ReviewTile = props => {
  return(
    <div>
      <h4>Title: {props.title}</h4>
      <h5>Rating: {props.rating}</h5>
      <h6>Review: {props.body}</h6>
    </div>
  )
}

export default ReviewTile
