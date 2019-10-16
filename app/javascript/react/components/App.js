import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AnimalsIndexContainer from "./index/AnimalsIndexContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AnimalsIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
