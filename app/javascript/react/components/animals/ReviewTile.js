import React from 'react'

const ReviewTile = props => {
  let buttons
  if(props.showButton){
    buttons = <div><button>Edit</button><br/><button>Delete</button></div>
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
