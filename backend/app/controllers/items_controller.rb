class ItemsController < ApplicationController

	def index
		render json: Item.all, include: { user: { except: [:password_digest, :created_at, :updated_at] } }, except: [:user_id, :created_at, :updated_at]
	end

end
