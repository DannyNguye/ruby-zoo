class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :rating, :body, :user_id, :review_date

  def review_date
    "#{object.created_at.strftime("%B %d, %Y - %I:%M%P")}"
  end

  belongs_to :user
  has_many :votes
end
