export const fetchAllPhoto = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/photos',
    data: {user_id}
  });
};

export const fetchPhotoFeed = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/photos'
  });
};

export const fetchSinglePhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  });
};

export const createPhoto = (photo) => {
  return $.ajax({
    method: 'POST',
    url: 'api/photos/',
    data: { photo }
  });
};

export const editPhoto = (id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/photos/${id}/edit`
  });
};

export const deletePhoto = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  });
};
