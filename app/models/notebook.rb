class Notebook < ApplicationRecord
  validates :title, :owner_id, presence: true
  validates :title, uniqueness: { scope: :owner_id }

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :notes
end
