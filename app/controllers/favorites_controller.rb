class FavoritesController < ApplicationController

  # params: tweet, user
  def new
    @favorite = Favorite.create(
      tweet_id: params[:tweet][:id],
      user_id: params[:user][:id]
    )
    if @favorite.save
      render json: {favorite: @favorite}
    else
      # we need better error message?
      render json: {message: "Error liking tweet"}, status: :unauthorized
    end
  end

  # params: tweet, user
  def delete
    @favorite = Favorite.where(["tweet_id = ? AND user_id = ?", params[:tweet][:id], params[:user][:id])
    # @deleted = Favorite.find(@relationship[0].id)
    if @favorite[0].destroy
      render :json=> { success: 'favorite was successfully deleted' }, :status=>201
    else
      render :json=> { error: 'favorite could not be deleted' }, :status=>422
    end
  end

  # params: tweet
  def get_favorites_for_tweet
    @favorites = Favorite.where("tweet_id = ?", params[:id])
    render json: {favorites: @favorites}
  end

end
