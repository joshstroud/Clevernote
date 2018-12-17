class Api::NotebooksController < ApplicationController
  def index
    unless current_user
      render json: ["You are not logged in"], status: 404
    end

    @notebooks = current_user.notebooks
    # @notes = Note.sorted_user_notes(current_user)
    render :index
  end 

  def show
    unless current_user
      render json: ["You are not logged in"], status: 404
    end

    @notes = current_user.notes.where("notebook_id = ?", params[:id])

    render "api/notes/index"
  end

  def create
    @notebook = Notebook.new(notebook_params)

    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def update
    @notebook = Notebook.find_by(id: params[:id].to_i)

    unless @notebook
      render json: ["Notebook does not exist"], status: 404 
    end

    if @notebook.update_attributes(notebook_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy

    @notebook = Notebook.find_by(id: params[:id])

    if @notebook
      @notebook.destroy
      render :show
    else
      render json: ["Notebook does not exist"], status: 404
    end
  end

  private 
  def notebook_params
    params.require(:notebook).permit(:title, :owner_id)
  end
end
