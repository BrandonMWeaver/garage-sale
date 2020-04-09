class UsersController < ApplicationController

	def index
		render json: User.all, except: [:password_digest, :created_at, :updated_at]
	end

end
