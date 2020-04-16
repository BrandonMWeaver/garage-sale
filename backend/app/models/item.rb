class Item < ApplicationRecord

	belongs_to :user
	
	has_one_attached :image
	
	validates :name, length: { minimum: 3, maximum: 15 }
	validates :description, length: { minimum: 9, maximum: 135 }
	validates :price, numericality: true

	scope :in_cart, -> (buyer_id) { where("buyer_id = ?", buyer_id) }
	
end
