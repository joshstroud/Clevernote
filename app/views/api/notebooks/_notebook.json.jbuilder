json.extract! notebook, :id, :title, :owner_id, :updated_at
json.time_since_update "#{time_ago_in_words(notebook.updated_at).capitalize} ago"