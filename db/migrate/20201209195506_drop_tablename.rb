class DropTablename < ActiveRecord::Migration[6.0]
  def change
    drop_table :user_tokens
  end
end
