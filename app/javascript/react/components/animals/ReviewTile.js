import React, { useEffect, useState } from 'react'
import VotesTile from './VotesTile'

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
    buttons = <div><button>Edit</button><br/><button>Delete</button></div>
  }

  return(
    <div className="review-tile">
      <ul>
        <li><h4>Title: {props.title}</h4></li>
        <li><h3>Rating: {props.rating}</h3></li>
        <li><p>"{props.body}"</p></li>
      </ul>
      <VotesTile
        handleVoteClick={handleVoteClick}
        votes={votes}
      />
      {buttons}
    </div>
  )
}

export default ReviewTile
