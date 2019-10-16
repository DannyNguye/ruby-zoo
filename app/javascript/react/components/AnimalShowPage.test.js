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

  it("renders an h2 tag with the name of the animal", () => {
    expect(wrapper.find("h2").text()).toBe("Hugo")
  })

  it("renders an h3 tag with the animal species", () => {
    expect(wrapper.find("h3").text()).toBe("Species: Hippo")
  })
})
