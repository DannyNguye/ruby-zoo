import React from 'react'

const ReviewTile = props => {
  let buttons
  if(props.showButton){
    buttons = <div><button>Edit</button><br/><button>Delete</button></div>
  }
  return(
    <div className="review-tile">
      <ul>
        <li><h4>Title: {props.title}</h4></li>
        <li><h3>Rating: {props.rating}</h3></li>
        <li><p>"{props.body}"</p></li>
      </ul>
      {buttons}
    </div>
  )
}

export default ReviewTile
