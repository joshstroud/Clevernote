class Api::TaggingsController < ApplicationController
  def index
    unless current_user
      render json: ["You are not logged in"], status: 404
    end

    @taggings = current_user.taggings
    render :index
  end


  def create
    @taggings = Taggings.new(taggings_params)

    if @taggings.save
      render :show
    else
      render json: @taggings.errors.full_messages, status: 422
    end
  end

  def destroy
    @tagging = Tagging.find_by(id: params[:id])

    if @tagging
      @taggings.destroy
      render :show
    else
      render json: ["Tagging does not exist"], status: 404
    end
  end

  private 
  def taggings_params
    params.require(:taggings).permit(:note_id, :tag_id)
  end
end
