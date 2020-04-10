class UsersController < ApplicationController

	def index
		render json: User.all, only: [:id, :username]
	end

end
