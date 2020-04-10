# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "example username 1", email: "example1@example.com", password: "12345")
user2 = User.create(username: "example username 2", email: "example2@example.com", password: "abcde")
5.times do
	user1.items.create(name: "example item", image_path: "https://i.redd.it/w3kr4m2fi3111.png", description: "example description", price: 1.11)
end
5.times do
	user2.items.create(name: "EXAMPLE ITEM", image_path: "https://i.redd.it/w3kr4m2fi3111.png", description: "EXAMPLE DESCRIPTION", price: 2.22)
end
