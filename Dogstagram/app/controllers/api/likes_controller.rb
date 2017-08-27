class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id

    if @like.save
      render "api/likes/show"
    else
      render json: @likes.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render "api/likes/show"
  end

  def index
    @likes = Like.where(photo_id: params[:photo_id])
  end

  def show
    @like = Like.find(params[:id])
  end

  private

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
