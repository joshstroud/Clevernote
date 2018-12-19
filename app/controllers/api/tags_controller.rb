class Api::TagsController < ApplicationController
  def index
    unless current_user
      render json: ["You are not logged in"], status: 404
    end

    @tags = current_user.tags.uniq
    render :index
  end

  def show
    @notes = Note.joins(:taggings).where(taggings: { tag_id: params[:id]})
    
    render "api/notes/index"
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:id])

    if @tag
      @tag.destroy
      render :show
    else
      render json: ["Tag does not exist"], status: 404
    end
  end

  private 
  def tag_params
    params.require(:tag).permit(:name, :owner_id)
  end
end
