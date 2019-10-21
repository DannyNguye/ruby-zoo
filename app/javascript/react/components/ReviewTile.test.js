import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import ReviewTile from "./animals/ReviewTile"

describe("ReviewTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ReviewTile
          key="1"
          id="1"
          title="cute elephant"
          rating="5"
          body="Cute elephant"
        />
      </BrowserRouter>
    )
  })

  it("renders an h4 tag with the reviews", () => {
    expect(wrapper.find("h4").text()).toBe("Title: cute elephant")
  })
})
