class CreateHomes < ActiveRecord::Migration
  def change
    create_table :homes do |t|
      t.string :projects
      t.string :about
      t.string :index
      t.string :education
      t.string :contact

      t.timestamps null: false
    end
  end
end
