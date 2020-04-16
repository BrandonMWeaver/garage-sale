class User < ApplicationRecord

	has_secure_password

	has_many :items
	
	validates_with SlugValidator
	
	validates :username, uniqueness: true
	validates :username, length: { minimum: 5 }
	validates :email, uniqueness: true
	validates :password, length: { minimum: 5 }

end
