class TweetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by(handle: params[:user][:handle])
    # throw error if not currentUser ??
    @new_tweet = @user.tweets.build(
      body: params[:newTweet],
      handle: @user[:handle]
    )
    if @new_tweet.save
      render json: {newTweet: @new_tweet}
    else
      # we need better error message?
      render json: {message: "Error: Tweet Not Posted"}, status: :unauthorized
    end
  end

  def delete
    # p params[:id].to_i
    @tweet = Tweet.find(params[:id].to_i)
    @tweet.destroy
    render json: @tweet
  end

  def get_user_feed
    # all tweets from current_user and other users followed by current_user
    # params: {userId: currentUser.id}
    @user_following = get_user_following(params)
    following_ids = []
    @user_following.each do |user|
      following_ids.push(user[:id])
    end
    @user_feed = Tweet.where("user_id in (?) OR user_id = ?",
                      following_ids, params[:userId]).reverse_order
    render json: @user_feed
  end

end
