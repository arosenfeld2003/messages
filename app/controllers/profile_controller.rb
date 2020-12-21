class ProfileController < ApplicationController
    def get_user_profile
        @profile = User.where("email = ?", params[:email])

        if @userProfile
            render json: @profile
        else
            render json: "404 Not found", :status => 404
        end

    end
end