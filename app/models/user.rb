class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :tweets, primary_key: :handle_id

  has_many :followers, foreign_key: :follower_id , class_name: "Friend"
  has_many :followed, through: :followers
  
  has_many :followed, foreign_key: :followed_id, class_name: "Friend"
  has_many :followers, through: :followed

end
