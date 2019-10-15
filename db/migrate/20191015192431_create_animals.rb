class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.string :name, null: false
      t.string :species, null: false
      t.string :sex, null: false
      t.string :habitat, null: false
      t.string :diet
      t.text :description

      t.timestamps
    end
  end
end
