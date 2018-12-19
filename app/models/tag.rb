class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :owner_id, presence: true
  validates :owner_id, uniqueness: { scope: :name }


  # has_many :taggers,
  #   through: :taggings

  has_many :taggings,
    foreign_key: :tag_id,
    class_name: :Tagging,
    dependent: :destroy

  has_many :notes,
    through: :taggings,
    source: :notes

  belongs_to :tagger,
    foreign_key: :owner_id,
    class_name: :User
end
