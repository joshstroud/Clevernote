class Api::NotesController < ApplicationController
  def index
    unless current_user
      render json: ["You are not logged in"], status: 404
    end

    @notes = current_user.notes
    # @notes = Note.sorted_user_notes(current_user)
    render :index
  end

  def show
    @note = Note.find_by(id: params[:id])
    if @note
      render :show
    else
      render json: ["Note does not exist"], status: 404
    end
  end

  def create
    @note = Note.new(note_params)

    if @note.save
      render :show
    else 
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find_by(id: params[:id])
    unless @note
      render json: ["Note does not exist"], status: 404 
    end

    if @note.update_attributes(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find_by(id: params[:id])
    if @note
      @note.destroy
      render :show
    else
      render json: ["Note does not exist"], status: 404 
    end
    # What should a delete return?
  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :author_id, :notebook_id)
  end
end
