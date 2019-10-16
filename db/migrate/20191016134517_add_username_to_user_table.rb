class AddUsernameToUserTable < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :username, :string, null: false
  end
  def down
    remove_column :users, :username
  end
end
