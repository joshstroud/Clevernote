class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      Notebook.create(title: "My First Notebook", owner_id: @user.id)
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end