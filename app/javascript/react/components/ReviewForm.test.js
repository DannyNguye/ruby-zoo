import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import ReviewForm from "./animals/ReviewForm"
import ErrorList from "./ErrorList"

describe("ReviewForm", () => {
  let wrapper, onSubmitMock, onChangeMock

  let reviewFields = {
    rating: "5",
    title: "So good",
    body: "This animal is the most adorable"
  }

  let errors = ["Name can't be blank"]

  beforeEach(() => {
    onSubmitMock = jest.fn()
    onChangeMock = jest.fn()
    wrapper = mount(
      <BrowserRouter>
        <ReviewForm
          reviewFields={reviewFields}
          errors={errors}
          handleSubmit={onSubmitMock}
          handleInputChange={onChangeMock}
        />
      </BrowserRouter>
    )
  })

  it('should render an Error component', () => {
    expect(wrapper.find(ErrorList).props().errors[0]).toBe("Name can't be blank")
  })

  it('should invoke the submit function from props when clicked', () => {
    let form = wrapper.find("#review-form")
    form.simulate("submit")
    expect(onSubmitMock).toHaveBeenCalled()
  })

  it('should invoke the change function from props when title has changed', () => {
    let title = wrapper.find("#title")
    title.simulate("change")
    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should invoke the change function from props when rating has changed', () => {
    let rating = wrapper.find("#rating")
    rating.simulate("change")
    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should invoke the change function from props when body has changed', () => {
    let body = wrapper.find("#body")
    body.simulate("change")
    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should print the title in the input field', () => {
    expect(wrapper.find("#title").props().value).toBe("So good")
  })

  it('should print the rating in the input field', () => {
    expect(wrapper.find("#rating").props().value).toBe("5")
  })

  it('should print the body in the input field', () => {
    expect(wrapper.find("#body").props().value).toBe("This animal is the most adorable")
  })
})
