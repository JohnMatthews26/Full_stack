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
    @like = Like.find_by(photo_id: params[:id], user_id: current_user.id)

    like_dup = @like
    @like.destroy
    @like = like_dup

    render "api/likes/show"
  end

  def index
    if params[:photo_id]
      @likes = Like.where(photo_id: params[:photo_id])
    else
      @likes = Like.all
    end
  end

  def show
    @like = Like.find_by(photo_id: params[:id], user_id: current_user.id)
    if @like
      render "api/likes/show"
    else
      render "api/likes/show"
    end
  end

  private

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
