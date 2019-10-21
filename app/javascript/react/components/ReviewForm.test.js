import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })
​
import ReviewForm from "./animals/ReviewForm"
import ErrorList from "./ErrorList"
​
describe("ReviewForm", () => {
  let wrapper, onSubmitMock, onChangeMock
​
  let reviewFields = {
    rating: "5",
    title: "So good",
    body: "This animal is the most adorable"
  }
​
  let errors = ["Name can't be blank"]
​
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
​
  it('should render an Error component', () => {
    expect(wrapper.find(ErrorList).props().errors[0]).toBe("Name can't be blank")
  })
​
  it('print the review fields in the form', () => {
    expect(wrapper.find('form').text()).toContain("Choose One")
  })
​
  it('should invoke the submit function from props when clicked', () => {
    wrapper.simulate("click")
    expect(onSubmitMock).toHaveBeenCalled()
  })
})
