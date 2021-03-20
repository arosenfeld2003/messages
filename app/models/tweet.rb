class Tweet < ApplicationRecord
  belongs_to :user #, foreign_key: :handle_id
  has_many :favorites, dependent: :destroy
end
