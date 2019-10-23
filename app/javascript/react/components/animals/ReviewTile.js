import React, { useEffect, useState } from 'react'
import VotesTile from './VotesTile'
import AdminButtonTile from './AdminButtonTile'

const ReviewTile = props => {
  const [votes, setVotes] = useState([])

  useEffect(() => {
    fetch(`/api/v1/animals/${props.animalId}/reviews/${props.id}/votes`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setVotes(body.votes)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const handleVoteClick = (voteInfo) => {
    fetch(`/api/v1/animals/${props.animalId}/reviews/${props.id}/votes`, {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(voteInfo),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setVotes(body.votes)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

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
    <div className="review-tile row">
      <div className="columns large-9 small-12">
        <ul>
          <li><h4>Title: {props.title}</h4></li>
          <li><h5>Rating: {ratingStar}</h5></li>
          <li><p>"{props.body}"</p></li>
          {buttons}
        </ul>
      </div>
      <div className="columns large-3 small-12">
        <VotesTile
          handleVoteClick={handleVoteClick}
          votes={votes}
        />
      </div>
    </div>
  )
}

export default ReviewTile
