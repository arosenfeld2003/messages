class CommentsController < ApplicationController

  def create
    @tweet = Tweet.find(params[:tweet_id])
    @comment = @tweet.comments.create(comment_params)

    p @tweet

    if @comment.save
      render json: @tweet.comments
    else
      render json: @comment.errors, status: :unprocessable_entity
    end

  end

  def destroy
    @tweet = Tweet.find(params[:tweet_id])
    @comment = @tweet.comments.find(params[:id])
    @comment.destroy
  end

  private
    def comment_params
      params.require(:comment).permit(:author, :comment)
    end

end
