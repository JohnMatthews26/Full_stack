
export const followUser = (follow) => {
  return $.ajax({
    url: `api/follows`,
    method: 'POST',
    data: {follow}
  });
};

export const unfollowUser = (id) => {
  return $.ajax({
    url: `api/follows/${id}`,
    method: 'DELETE'

  });
};

export const getFollow = (id) => {
  return $.ajax({
    url: `api/follows/${id}`,
    method: 'GET'
  });
};

export const getAllFollows = () => {
    return $.ajax({
      url: `api/follows`,
      method: 'GET',

    });
};
