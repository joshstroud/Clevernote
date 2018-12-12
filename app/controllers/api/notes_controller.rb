class Api::NotesController < ApplicationController
  def index
    @notes = Note.all
    render :index
  end

  def show
    # what's syntax again?
    @note = Note.find_by(id: params[:note][:id])
    if @note
      render :show
    else
      render json: ["Note does not exist"], status: 404
    end
  end

  def create
    @note = Note.new(note_params)

    if @note
      render :show
    else 
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find_by(id: params[:note][:id])

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
    @note = Note.find_by(id: params[:note][:id])
    @note.destroy
    render :show
    # What should a delete return?
  end

  private note_params
    params.require(:note).permit(:title, :body, :author_id, :notebook_id)
  end
end
