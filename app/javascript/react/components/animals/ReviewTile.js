import React from 'react'
import AdminButtonTile from './AdminButtonTile'

const ReviewTile = props => {
  let buttons
  if(props.showButton){
    buttons = <AdminButtonTile />
  }
  return(
    <div>
      <h4>Title: {props.title}</h4>
      <h5>Rating: {props.rating}</h5>
      <h6>Review: {props.body}</h6>
      {buttons}
    </div>
  )
}

export default ReviewTile
