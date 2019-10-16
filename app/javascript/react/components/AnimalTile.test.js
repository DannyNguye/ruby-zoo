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

  it("renders an h3 tag with the animal name", () => {
    expect(wrapper.find("h3").text()).toBe("Ryan")
  })

  it("renders a p tag with the animal species", () => {
    expect(wrapper.find("p").text()).toBe("Dragon")
  })

})
