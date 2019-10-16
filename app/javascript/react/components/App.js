import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AnimalsIndexContainer from "./animals/AnimalsIndexContainer"
import AnimalForm from "./animals/AnimalForm"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AnimalsIndexContainer} />
        <Route exact path="/animals" component={AnimalsIndexContainer} />
        <Route exact path="/animals/new" component={AnimalForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
