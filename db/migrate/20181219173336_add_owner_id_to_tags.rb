class AddOwnerIdToTags < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :owner_id, :integer, presence: true
    add_index :tags, :owner_id
    add_index :tags, [:name, :owner_id], unique: true
  end
end
