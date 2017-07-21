
@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :description, :user_id, :url
    json.url asset_path(photo.url)
  end
end
