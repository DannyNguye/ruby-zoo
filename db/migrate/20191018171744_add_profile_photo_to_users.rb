class AddProfilePhotoToUsers < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :profile_photo, :string, null: false
  end

  def down
    remove_column :users, :profile_photo
  end
end
