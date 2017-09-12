export const createComment = (comment) => {
  console.log(comment);
  return $.ajax({
    method: 'POST',
    url: 'api/comments/',
    data: {comment}
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`,

  });
};

export const fetchSingleComment = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/comments/${id}`
  });
};

export const fetchAllComments = (photo_id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/comments',
    data: {photo_id}
  });
};
