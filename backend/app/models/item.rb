class Item < ApplicationRecord

	belongs_to :user
	
	has_one_attached :image
	
	scope :in_cart, -> (buyer_id) { where("buyer_id = ?", buyer_id) }
	
end
