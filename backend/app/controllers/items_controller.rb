class ItemsController < ApplicationController

	def index
		if params[:user_id]
			render json: ItemSerializer.new(User.find_by_id(params[:user_id]).items).serialize
		else
			render json: ItemSerializer.new(Item.all).serialize
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
			render json: ItemSerializer.new(item).serialize
		else
			render json: { errors: item.errors.full_messages }
		end
	end

	def update
		item = Item.find_by_id(params[:id])
		item.update(sold: true, buyer_id: current_user.id)
		render json: ItemSerializer.new(item).serialize
	end

	def cart
		render json: ItemSerializer.new(Item.in_cart(params[:id])).serialize
	end

	def remove_item_from_cart
		item = Item.find_by_id(params[:id])
		item.update(buyer_id: nil, sold: false)
		render json: ItemSerializer.new(Item.in_cart(current_user.id)).serialize
	end

	def image
		redirect_to url_for(Item.find_by_id(params[:id]).image)
	end

end
