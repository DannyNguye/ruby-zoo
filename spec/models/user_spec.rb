require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many :animals }
  it { should have_many :reviews }
  it { should have_many :votes }

  it { should have_valid(:username).when("Shanifox") }
  it { should_not have_valid(:username).when(nil, "") }
end
