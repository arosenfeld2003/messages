class RelationshipsController < ApplicationController
  # params: follower, followed
  def new
    @relationship = Relationship.create(
      follower_id: params[:follower][:id],
      followed_id: params[:followed][:id]
    )
    p @relationship
    if @relationship.save
      render json: {relationship: @relationship}
    else
      # we need better error message?
      render json: {message: "Error building relationship"}, status: :unauthorized
    end
  end

  def delete
    @relationship = Relationship.where(
      "follower_id = ? AND followed_id = ?",
      params[:follower][:id], params[:followed][:id]
    )
    p @relationship
    @relationship.destroy
    render json: @relationship
  end

  # params: userId
  def get_followers
    @relationships = Relationship.where("followed_id = ?", params[:userId])
    @followers = []
    @relationships.each do |rel|
      follower = User.where(id: rel.follower_id)
      @followers.push(follower[0])
    end
    render json: {followers: @followers}
  end

  def get_followed
    @relationships = Relationship.where("follower_id = ?", params[:userId])
    p @relationships
    @following = []
    @relationships.each do |rel|
      followed = User.where(id: rel.followed_id)
      @following.push(followed[0])
    end
    p @following
    render json: {following: @following}
  end

end
