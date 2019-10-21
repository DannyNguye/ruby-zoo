import React from 'react'

const ReviewTile = props => {
  return(
    <div className="review-tile">
      <ul>
        <li><h4>Title: {props.title}</h4></li>
        <li><h3>Rating: {props.rating}</h3></li>
        <li><p>"{props.body}"</p></li>
      </ul>

    </div>
  )
}

export default ReviewTile
