class ItemSerializer

	def initialize(item)
		@item = item
	end

	def serialize
		return @item.to_json(
			include: {
				user: {
					except: [:password_digest, :created_at, :updated_at]
				}
			},
			except: [:user_id, :created_at, :updated_at]
		)
	end

end
