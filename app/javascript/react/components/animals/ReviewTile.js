import React from 'react'
import AdminButtonTile from './AdminButtonTile'

const ReviewTile = props => {
  let buttons
  if(props.showButton){
    buttons = <AdminButtonTile />
  }
  let countStar = 0
  let ratingStar = []
  while(countStar < props.rating){
    ratingStar.push(<i key={countStar} className="fa fa-star"></i>)
    countStar++
  }
  return(
    <div className="review-tile columns large-10 small-12">
      <ul>
        <li><h4>Title: {props.title}</h4></li>
        <li><h5>Rating: {ratingStar}</h5></li>
        <li><p>"{props.body}"</p></li>
      </ul>
      {buttons}
    </div>
  )
}

export default ReviewTile
