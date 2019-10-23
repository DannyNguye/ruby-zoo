import React from 'react'

const VotesTile = props => {
  let upVoteCount = 0
  let downVoteCount = 0

  if (props.votes.length > 0) {
    props.votes.forEach(vote => {
      upVoteCount += vote.up
      downVoteCount += vote.down
    })
  }

  const handleClick = event => {
    event.preventDefault()
    props.handleVoteClick(event.currentTarget.id)
  }

  return(
    <div>
      <form>
        <button className="fa fa-2x fa-paw upvote" id="up" onClick={handleClick}></button>
        <span className="vote-number" id="up-span">{upVoteCount}</span>
        <button className="fa fa-2x fa-paw downvote fa-flip-vertical" id="down" onClick={handleClick}></button>
        <span className="vote-number" id="down-span">{downVoteCount}</span>
      </form>
    </div>
  )
}

export default VotesTile
