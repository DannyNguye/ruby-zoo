require 'rails_helper'

RSpec.describe Animal, type: :model do
  it { should belong_to :user }
  it { should have_many :reviews }

  it { should have_valid(:name).when("Shani") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:species).when("fox") }
  it { should_not have_valid(:species).when(nil, "") }

  it { should have_valid(:sex).when("Female") }
  it { should_not have_valid(:sex).when(nil, "") }

  it { should have_valid(:habitat).when("Forest") }
  it { should_not have_valid(:habitat).when(nil, "") }
end
