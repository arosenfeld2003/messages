require 'rails_helper'

RSpec.describe User, type: :model do
  it "has many followers" do
    should respond_to(:followers)
  end
end
