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
    # p "@profile ==> #{@profile.id}"
    @tweets = Tweet.where(handle: user_params[:handle])
    @followers = get_user_followers({userId: @profile.id})
    @following = get_user_following({userId: @profile.id})
    if @profile
      render json: {
        id: @profile.id,
        email: @profile.email,
        handle: @profile.handle,
        created_at: @profile.created_at.to_formatted_s(:long),
        tweets: @tweets.length,
        followers: @followers.length,
        following: @following.length,
        firstname: @profile.firstname,
        lastname: @profile.lastname
      }
    else
      warden.custom_failure!
      render :json=> {error: "User not found"}, :status=>404
    end
  end

  def update_profile
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render :json=> @user.errors, :status=>422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :handle, :password, :password_confirmation)
  end

end