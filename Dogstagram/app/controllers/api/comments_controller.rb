class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find_by(id: params[:id])
    if @comment
      render "api/comments/show"
    end
  end

  def index
    if params[:photo_id]
      @comments = Comment.where(photo_id: params[:photo_id])
    else
      @comments = Comment.all
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    comment_dup = @comment
    @comment.destroy
    @comment = comment_dup
    render "api/comments/show"
  end

  private

  def comment_params
    params.require(:comment).permit(:photo_id, :body)
  end
end
