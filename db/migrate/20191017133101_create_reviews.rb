class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.string :title, null:false
      t.text :review_body, null: false

      t.belongs_to :animal, null: false
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
