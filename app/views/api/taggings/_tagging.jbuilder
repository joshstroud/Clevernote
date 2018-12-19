json.extract! tagging, :id, :note_id, :tag_id
json.time_since_update "#{time_ago_in_words(notebook.updated_at).capitalize} ago"
json.num_notes notebook.notes.length