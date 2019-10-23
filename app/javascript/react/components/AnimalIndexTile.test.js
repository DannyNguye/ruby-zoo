import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import AnimalIndexTile from "./animals/AnimalIndexTile"

describe("AnimalTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <AnimalIndexTile
          name="Ryan"
          species="Dragon"
          imageUrl="https://papermilkdesign.com/images/zoo-clipart-background-5.jpg"
        />
      </BrowserRouter>
    )
  })

  it("renders an h4 tag with the animal name", () => {
    expect(wrapper.find("h4").text()).toBe("Ryan")
  })

  it("renders a h5 tag with the animal species", () => {
    expect(wrapper.find("h5").text()).toBe("Dragon")
  })

  it("renders a default image for the animal tile", () => {
    expect(wrapper.find("img").prop("src")).toEqual("https://papermilkdesign.com/images/zoo-clipart-background-5.jpg")
  })

  it("renders a button-link that will lead to an animal show page", () => {
    expect(wrapper.find("a").text()).toBe("View Details")
  })
})
