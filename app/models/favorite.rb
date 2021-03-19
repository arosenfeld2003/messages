class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :tweet, dependent: :destroy
end
