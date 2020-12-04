class SessionsController < Devise::SessionsController
  include Devise::Controllers::Helpers
  before_action :authenticate_user!

  # POST /v1/login
  def create
    @user = User.find_by_email(user_params[:email])
    return invalid_login_attempt unless @user

    if @user.valid_password?(user_params[:password])
      sign_in :user, @user
      render json: @user
    else
      invalid_login_attempt
    end
  end

  def logged_in?
      if current_user
        render json: {
          logged_in: true,
          user: current_user
        }
      else
        render json: {
          logged_in: false,
          message: 'no such user'
        }
      end
  end

  def destroy
    sign_out(@user)
    render :json=> {:success=>true}
  end


  private

  def invalid_login_attempt
    warden.custom_failure!
    render json: {error: 'invalid login attempt'}, :status=>401
  end

  def user_params
     params.require(:user).permit(:email, :password)
  end

end
