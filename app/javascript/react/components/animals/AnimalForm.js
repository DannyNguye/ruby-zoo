import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import _ from "lodash"
import ErrorList from "../ErrorList"

const AnimalForm = props => {
  const [animalFields, setAnimalFields] = useState({
    name: "",
    species: "",
    sex: "",
    habitat: "",
    diet: "",
    description: ""
  })

  const [errors, setErrors] = useState({})
  const [redirectNumber, setRedirectNumber] = useState(null)

  const handleInputChange = event => {
    setAnimalFields({
      ...animalFields,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}

    const requiredFields = ["name", "species", "sex", "habitat"]

    requiredFields.forEach(field => {
      if(animalFields[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "can't be blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmitHandler = event => {
    event.preventDefault()
    if (validForSubmission()) {
      fetch('/api/v1/animals.json', {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(animalFields),
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
      if (body.id) {
        setRedirectNumber(body.id)
      } else {
        setErrors(body.errors)
        setAnimalFields(body.fields)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

    setAnimalFields({
      name: "",
      species: "",
      sex: "",
      habitat: "",
      diet: "",
      description: ""
    })
    }
  }

  if (redirectNumber) {
    return <Redirect to={`/animals/${redirectNumber}`} />
  }

  return(
    <div>
      <h2>Add a New Animal</h2>
      <form onSubmit={handleSubmitHandler}>
        <ErrorList
          errors={errors}
        />
        <label htmlFor="name">Name:
          <input
            type="text"
            id="name"
            value={animalFields.name}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="species">Species:
          <input
            type="text"
            id="species"
            value={animalFields.species}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="sex">Sex:
          <select
            type="text"
            id="sex"
            value={animalFields.sex}
            onChange={handleInputChange}
          >
            <option value="">Choose One</option>
            <option value="F">Female</option>
            <option value="M">Male</option>
          </select>
        </label>

        <label htmlFor="habitat">Habitat:
          <input
            type="text"
            id="habitat"
            value={animalFields.habitat}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="diet">Diet:
          <input
            type="text"
            id="diet"
            value={animalFields.diet}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="description">Description:
          <input
            type="text"
            id="description"
            value={animalFields.description}
            onChange={handleInputChange}
          />
        </label>

        <input type="submit" value="Add Animal" />
      </form>
    </div>
  )
}

export default AnimalForm
