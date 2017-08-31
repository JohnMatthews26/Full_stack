@likes.each do |like|
  json.set! like.user_id do
    json.extract! like, :id, :user_id, :photo_id
  end
end
