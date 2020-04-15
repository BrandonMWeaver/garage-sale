class ItemsController < ApplicationController

	def index
		if params[:user_id]
			render json: User.find_by_id(params[:user_id]).items, include: { user: { except: [:password_digest, :created_at, :updated_at] } }, except: [:user_id, :created_at, :updated_at]
		else
			render json: Item.all, include: { user: { except: [:password_digest, :created_at, :updated_at] } }, except: [:user_id, :created_at, :updated_at]
		end
	end

	def create
		item = current_user.items.new(name: params[:name], description: params[:description], price: params[:price])
		if params[:image]
			item.image.attach(params[:image])
		end
		if item.save
			if item.image.attached?
				item.update(image_path: "http://localhost:3000/items/#{item.id}/image")
			else
				item.update(image_path: "http://localhost:3000/images/default.png")
			end
			item.save
			render json: item, include: { user: { except: [:password_digest, :created_at, :updated_at] } }, except: [:user_id, :created_at, :updated_at]
		else
			render json: { errors: item.errors.full_messages }
		end
	end

	def update
		item = Item.find_by_id(params[:id])
		item.update(sold: true)
		render json: item, include: { user: { except: [:password_digest, :created_at, :updated_at] } }, except: [:user_id, :created_at, :updated_at]
	end

	def image
		redirect_to url_for(Item.find_by_id(params[:id]).image)
	end

end
