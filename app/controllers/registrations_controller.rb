class RegistrationsController < Devise::RegistrationsController

  def create
    p user_params
    @user = User.new(user_params)
    if @user.save
      @iat = Time.now

      #add 2 hours 
      @exp = @iat + 7200 
      
      @token = JWT.encode({sub: @user.id, iat: @iat.to_i, exp: @exp.to_i}, Rails.application.secrets.secret_key_base) # for production use ENV["SECRET_KEY"]

      render json: {
        user: @user,
        token: @token
      }
    else
      warden.custom_failure!
      render json: { error: 'signup error' }, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find_by_email(user_params[:email])

    if @user.update_attributes(user_params)
      render json: @user
    else
      warden.custom_failure!
      render :json=> @user.errors, :status=>422
    end
 end

  def destroy
    @user = User.find_by_email(user_params[:email])
    if @user.destroy
      render :json=> { success: 'user was successfully deleted' }, :status=>201
    else
      render :json=> { error: 'user could not be deleted' }, :status=>422
    end
  end

  private

  def user_params
     params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
