import React, { useState, useEffect } from 'react'
import AnimalIndexTile from "./AnimalIndexTile"
import WelcomeTile from "./WelcomeTile"

const AnimalsIndexContainer = props => {
  const [animals, setAnimals] = useState([])
  const [userRole, setUserRole] = useState("")
  
  useEffect(() => {
    let search = ""
    if (props.location.search) {
      search = props.location.search
    }
    fetch(`/api/v1/animals${search}.json`)
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      setAnimals(body.animals)
      setUserRole(body.user_role)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const animalTiles = animals.map(animal => {
    let showButton = false
    if(userRole === "admin"){
      showButton = true
    }
    return(
      <AnimalIndexTile
        key={animal.id}
        id={animal.id}
        name={animal.name}
        species={animal.species}
        imageUrl={animal.imageurl}
        showButton={showButton}
      />
    )
  })
  return(
    <div>
      <div className="row">
        <WelcomeTile />
      </div>
      <div className="row">
        {animalTiles}
      </div>
    </div>
  )
}

export default AnimalsIndexContainer
