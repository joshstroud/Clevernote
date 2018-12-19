class Tagging < ApplicationRecord
  validates :note_id, :tag_id, presence: true
  validates :note_id, uniqueness: { scope: :tag_id }

  belongs_to :notes,
    foreign_key: :note_id,
    class_name: :Note

  belongs_to :tags,
    foreign_key: :tag_id,
    class_name: :Tag

  has_one :tagger,
    through: :notes,
    source: :author
end
