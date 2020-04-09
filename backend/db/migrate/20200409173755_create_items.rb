class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.integer :user_id
      t.string :name
      t.string :image_path
      t.text :description
      t.decimal :price

      t.timestamps
    end
  end
end
