class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render "api/photos/show"
  end

  def index
    @photos = Photo.where(user_id: params[:user_id])

  end

  def show
    @photo = Photo.find(params[:id])
  end

  def patch

  end


  private

  def photo_params
    params.require(:photo).permit(:description, :url)
  end
end
