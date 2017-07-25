
export const changeFollowStatus = (id, method) => {
  return $.ajax({
    url: `api/users/${id}/follow`,
    method
  });
};



export const followUser = (id) => {
  changeFollowStatus(id, "POST");
};

export const unfollowUser = (id) => {
  changeFollowStatus(id, "DELETE");
};
