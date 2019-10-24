import React from 'react'
import { Link } from 'react-router-dom'

const WelcomeTile = props => {
  return(
    <div className="text-center">
      <div className="row">
        <h1 className="welcome-header column large-8 large-offset-2">Welcome to the Zoo</h1>
      </div>
      <p className="welcome-text">
        We hope you enjoyed your time in the zoo.
        While you wait for your parents to bring you
        back for another visit, you can still enjoy the animals from afar!
        If you loved an animal that you don't see below, <Link to="/animals/new">add it</Link>!
        Click on the animal to see more details about it!
        And feel free to leave your own review!
      </p>
    </div>
  )
}

export default WelcomeTile
