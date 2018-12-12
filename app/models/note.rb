class Note < ApplicationRecord
  validates :title, :author_id, :notebook_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end
