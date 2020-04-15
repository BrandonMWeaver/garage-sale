class ApplicationController < ActionController::API
	include ActionController::Cookies

	def current_user
		return @current_user ||= User.find_by(id: session[:user_id])
	end

	def logged_in?
		return !!current_user
	end

end
