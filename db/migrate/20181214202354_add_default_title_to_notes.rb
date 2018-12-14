class AddDefaultTitleToNotes < ActiveRecord::Migration[5.2]
  def change
    change_column_default :notes, :title, "Untitled"
  end
end
