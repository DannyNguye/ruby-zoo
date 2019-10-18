class AddAnimalPhotoToAnimals < ActiveRecord::Migration[5.2]
  def up
    add_column :animals, :photo, :string
  end
  def down
    remove_column :animals, :photo
  end
end
