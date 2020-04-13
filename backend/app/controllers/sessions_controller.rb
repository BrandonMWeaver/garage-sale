class SessionsController < ApplicationController

	def create
		user = User.find_by(username: params[:username])
		if user && user.authenticate(params[:password])
			session[:user_id] = user.id
			render json: user, except: [:password_digest, :created_at, :updated_at]
		else
			render json: { error: "Invalid username and/or password" }
		end
	end

	def destroy

	end
	
	def get_current_user
		if logged_in?
			render json: current_user, except: [:password_digest, :created_at, :updated_at]
		else
			render json: { message: "No current user" }
		end
	end

end
