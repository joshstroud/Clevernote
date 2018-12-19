class Note < ApplicationRecord
  validates :author_id, :notebook_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :notebook

  has_many :taggings

  has_many :tags,
    through: :taggings,
    source: :tags

  def self.sorted_user_notes(user)
     Note.where(author_id: user.id).order(updated_at: :asc)
  end

end
