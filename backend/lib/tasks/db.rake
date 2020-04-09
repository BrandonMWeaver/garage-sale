namespace :db do
	desc "Drop, create, migrate, seed"
	task reseed: ["db:drop:_unsafe", "db:create", "db:migrate", "db:seed"] do
		puts "Complete."
	end
end
