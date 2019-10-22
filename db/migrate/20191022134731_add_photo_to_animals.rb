class AddPhotoToAnimals < ActiveRecord::Migration[5.2]
  def up
    remove_column :animals, :photo
    add_column :animals, :imageurl, :string, default: 'https://papermilkdesign.com/images/zoo-clipart-background-5.jpg'
  end
  def down
    add_column :animals, :photo, :string
    remove_column :animals, :imageurl
  end
end
