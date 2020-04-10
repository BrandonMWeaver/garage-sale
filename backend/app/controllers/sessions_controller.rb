class SessionsController < ApplicationController

	def create
		user = User.find_by(username: params[:username])
		if user && user.authenticate(params[:password])
			render json: user, except: [:password_digest, :created_at, :updated_at]
		else
			render json: { message: "error" }
		end
	end

	def destroy

	end
	
end
