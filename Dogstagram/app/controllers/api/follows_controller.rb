class Api::FollowsController < ApplicationController


  def create

    @follow = Follow.new(follow_params)

    if @follow.save
      render "api/follows/show"
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
      @follow.destroy
      render "api/follows/show"
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
