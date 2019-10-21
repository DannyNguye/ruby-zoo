import React from 'react'
import ReviewTile from './ReviewTile'

const AnimalReviewContainer = props => {
  const reviewTiles = props.reviews.map(review => {
    let showButton = false
    if (props.user) {
      if(props.user.id === review.user_id){
        showButton = true
      }
    }

    return(
      <ReviewTile
        key={review.id}
        id={review.id}
        title={review.title}
        rating={review.rating}
        body={review.body}
        showButton={showButton}
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
