import React from 'react'
import ReviewTile from './ReviewTile'

const AnimalReviewContainer = props => {
  let reviewHeader = "Reviews"
  
  if (props.reviews.length === 0) {
    reviewHeader = "No Reviews Yet"
  }

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
        userReviewProfileImg={review.user.profile_photo.url}
        userName={review.user.username}
        createdAt={review.review_date}
      />
    )
  })

  return(
    <>
      <h3>{reviewHeader}</h3>
      {reviewTiles}
    </>
  )
}

export default AnimalReviewContainer
