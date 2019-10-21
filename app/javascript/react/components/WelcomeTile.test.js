import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import WelcomeTile from "./animals/WelcomeTile"

describe("WelcomeTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <WelcomeTile />
      </BrowserRouter>
    )
  })

  it("renders an h1 tag with welcome message", () => {
    expect(wrapper.find("h1").text()).toBe("Welcome to the Zoo")
  })

  it("renders a p tag with a welcoming paragraph", () => {
    expect(wrapper.find("p").text()).toContain("We hope you enjoyed your time in the zoo.")
  })

  it("renders a button-link that will lead to an animal form page", () => {
    expect(wrapper.find("Link").props().to).toBe("/animals/new")
  })
})
