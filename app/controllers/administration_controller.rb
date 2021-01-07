class AdministrationController < ApplicationController
    def destroy_profile
        @profile = User.find(params[:id])
        
        if @profile.destroy
            render :json=> { success: 'user was successfully deleted' }, :status=>201
        else
            render :json=> { error: 'user could not be deleted' }, :status=>422
        end
    end

    def get_profile
        @profile = User.find_by_email(user_params[:email])
        
        if @profile
            render json: {
                id: @profile.id,
                email: @profile.email,
                created_at: @profile.created_at.to_formatted_s(:long)
            }
        else
            warden.custom_failure!
            render :json=> {error: "User not found"}, :status=>404
        end
    end

    def update_profile
        @user = User.find(params[:id])
        if @user.update(params[:user])
            render json: @user
        else
            render :json=> @user.errors, :status=>422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end

end