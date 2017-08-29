
export const createLike = (like) => {
  console.log(like);
  return $.ajax({
    method: 'POST',
    url: 'api/likes/',
    data: {like}
  });
};

export const deleteLike = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`,

  });
};

export const fetchSingleLike = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/likes/${id}`
  });
};

export const fetchAllLikes = (photo_id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/likes',
    data: {photo_id}
  });
};
