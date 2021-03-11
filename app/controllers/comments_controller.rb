class CommentsController < ApplicationController

  def create
    @post = Tweet.find(params[:tweet_id])
    @comment = @post.comments.create(params[:comment].permit(:comment))
  end

  def destroy
    @post = Tweet.find(params[:tweet_id])
    @comment = @post.comments.find(params[:id])
    @comment.destroy
  end

end