class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.integer :note_id
      t.integer :tag_id

      t.timestamps
    end
    add_index :taggings, :note_id
    add_index :taggings, :tag_id
    add_index :taggings, [:note_id, :tag_id], unique: true
  end
end
