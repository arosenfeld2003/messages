class Tweet < ApplicationRecord
  belongs_to :user #, foreign_key: :handle_id
  
  has_many :comments, dependent: :destroy
end
