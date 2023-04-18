class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :title
      t.text :comment
      t.datetime :created_at
      t.integer :workout_id
      t.integer :user_id

      t.timestamps
    end
  end
end
