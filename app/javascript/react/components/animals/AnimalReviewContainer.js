import React from 'react'

import ReviewTile from './ReviewTile'

const AnimalReviewContainer = props => {
  const reviewTiles = props.reviews.map(review => {
    return(
      <ReviewTile
        key={review.id}
        id={review.id}
        title={review.title}
        rating={review.rating}
        review_body={review.review_body}
      />
    )
  })

  return(
    <div>
      <h3>Reviews</h3>
      {reviewTiles}
    </div>
  )
}

export default AnimalReviewContainer