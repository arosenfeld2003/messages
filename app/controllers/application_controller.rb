class ApplicationController < ActionController::Base

  protect_from_forgery with: :null_session

  def add_token_in_db(user, token, exp, iat) 
    @jwt = Token.create({
        :user_id => user.id,
        :token => token,
        :exp => exp,
        :iat => iat,
      })

    if @jwt.save
      p @jwt
    end
  end

end
