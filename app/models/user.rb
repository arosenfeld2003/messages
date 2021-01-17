class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :tweets, primary_key: :handle_id

  has_many :active_friendships, class_name:  "Friend",
                                foreign_key: "follower_id",
                                dependent:   :destroy

end
