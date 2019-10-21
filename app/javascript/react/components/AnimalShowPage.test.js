import React from 'react'
import AnimalShowPage from "./animals/AnimalShowPage"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe("AnimalShowPage", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <AnimalShowPage
          id="1"
          name="Hugo"
          species="Hippo"
          sex="M"
          habitat="Jungle"
          diet="Bananas"
          description="Loves to sleep all day underwater!"
        />
      </BrowserRouter>
    )
  })

  it("renders an h2 tag with the name of the animal and the species", () => {
    expect(wrapper.find("h2").text()).toBe("Hugo the Hippo")
  })

  it("renders an li tag with the sex of the animal", () => {
    expect(wrapper.find("#sex").text()).toBe("M")
  })

  it("renders an li tag with the habitat of the animal", () => {
    expect(wrapper.find("#habitat").text()).toBe("Jungle")
  })

  it("renders an li tag with the diet of the animal", () => {
    expect(wrapper.find("#diet").text()).toBe("Bananas")
  })

  it("renders an li tag with the description of the animal", () => {
    expect(wrapper.find("#description").text()).toBe("Loves to sleep all day underwater!")
  })

})
