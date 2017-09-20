@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :user_id, :photo_id, :body
    json.username comment.user.username
  end
end
