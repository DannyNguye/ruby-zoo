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
        animalId={props.animalId}
      />
    )
  })

  return(
    <div className="review-container row">
      <div className="reviews-header columns large-10 small-12">
        <h3>Reviews</h3>
      </div>
      {reviewTiles}
    </div>
  )
}

export default AnimalReviewContainer
