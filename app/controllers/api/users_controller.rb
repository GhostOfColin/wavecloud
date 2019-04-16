class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    # debugger
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  private 

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
