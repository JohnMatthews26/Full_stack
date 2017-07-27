class Api::FollowsController < ApplicationController


  def create

    @follow = Follow.new(follow_params)

    if @follow.save
      render json: {follow: true}
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def show
    @follow = Follow.find_by(followee_id: params[:id], follower_id: current_user.id)
    if @follow
      render json: {follow: true}
    else
      render json: {follow: false}
    end
  end

  def destroy
    @follow = Follow.find_by(
    followee_id: params[:id],
    follower_id: current_user.id
    )
    if @follow
      follow_dup = @follow.dup
      @follow.destroy
      @follow = follow_dup
      render json: {follow: false}
    end
  end

  def index
    @follows = Follow.where(follower_id: current_user.id)
    render "api/follows/index"
  end


  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
