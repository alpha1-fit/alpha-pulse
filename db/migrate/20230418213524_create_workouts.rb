class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts do |t|
      t.string :name
      t.string :type
      t.integer :user_id
      t.integer :duration
      t.datetime :schedule
      t.text :description
    

      t.timestamps
    end
  end
end
