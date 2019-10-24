require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should belong_to :animal }
  it { should belong_to :user }
  it { should have_many :votes }

  it { should have_valid(:rating).when(5) }
  it { should_not have_valid(:rating).when(nil, "", 6) }

  it { should have_valid(:body).when("what a great fox") }
  it { should_not have_valid(:body).when(nil, "") }

  it { should have_valid(:title).when("The Fox") }
  it { should_not have_valid(:title).when(nil, "") }
end
