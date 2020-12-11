class CreateTokenLists < ActiveRecord::Migration[6.0]
  def change
    create_table :token_lists do |t|
      t.string :user_id
      t.string :token
      t.integer :iat
      t.integer :exp

      t.timestamps
    end
  end
end
