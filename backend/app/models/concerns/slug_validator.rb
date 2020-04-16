class SlugValidator < ActiveModel::Validator

	def validate(record)
		User.all.each do |user|
			if record.username.gsub(' ', '-').downcase == user.username.gsub(' ', '-').downcase
				record.errors.add(:username, "is taken")
			end
		end
	end

end
