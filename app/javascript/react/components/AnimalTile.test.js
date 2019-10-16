import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import AnimalTile from "./index/AnimalTile"

Enzyme.configure({ adapter: new Adapter() })

describe("AnimalTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <AnimalTile
          name="Ryan"
          species="Dragon"
        />
      </BrowserRouter>
    )
  })
  it("renders a p tag", () => {
    expect(wrapper.find("p").exists()).toBe(true)
  })
  it("renders a p tag with the animal name", () => {
    expect(wrapper.find("p").text()).toBe("Ryan")
  })
})
