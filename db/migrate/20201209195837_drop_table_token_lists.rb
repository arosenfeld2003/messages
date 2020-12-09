class DropTableTokenLists < ActiveRecord::Migration[6.0]
  def change
    drop_table :token_lists
  end
end
