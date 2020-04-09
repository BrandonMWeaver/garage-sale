# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(username: "example username", email: "example@example.com", password: "12345")
5.times do
	user.items.create(user_id: user.id, name: "example item", image_path: "https://i.redd.it/w3kr4m2fi3111.png", description: "example description", price: 1.11)
end
