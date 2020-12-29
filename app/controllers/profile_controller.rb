class ProfileController < ApplicationController
    def get_user_profile
        @profile = User.where("email = ?", params[:email])
        @profile[:created_at].to_formatted_s(:long)

        if @userProfile
            render json: {
                id: @profile.id,
                email: @profile.email,
                created_at: @profile.created_at.to_formatted_s(:long)
            }
        else
            render json: "404 Not found", :status => 404
        end

    end
end