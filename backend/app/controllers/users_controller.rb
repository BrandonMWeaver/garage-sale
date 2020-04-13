class UsersController < ApplicationController

	def index
		render json: User.all, only: [:id, :username]
	end

	def create
		user = User.new(username: params[:username], email: params[:email], password: params[:password])
		if user.save
			session[:user_id] = user.id
			render json: user, except: [:password_digest, :created_at, :updated_at]
		else
			render json: { errors: user.errors.full_messages }
		end
	end

end
