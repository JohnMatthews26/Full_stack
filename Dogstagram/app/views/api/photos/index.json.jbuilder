
@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :description, :user_id, :url
    json.username photo.user.username
    json.url asset_path(photo.url)
    json.likes photo.likes
  end
end
