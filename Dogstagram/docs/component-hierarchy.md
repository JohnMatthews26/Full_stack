## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Navigation Bar

**PhotoFeedContainer**
 - FolloweesPhotos
  * Photo

**PhotoContainer**
  - Photo
  - Likes
  - LikeButton
  - Comments
  - AddComment
  - Description

**UserProfileContainer**
 - Photos
 - FollowersListLink
 - FolloweesListLink
 - Follow/Unfollow (if profile page is not current user)
 - EditProfile (if profile page is current user)


**NewPhotoContainer**
 - NewPhoto

**UserSearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/followees/photos" | "PhotoFeedContainer" |
| "/photos/:id" | "PhotoContainer" |
| "/users/:id" | "UserProfileContainer" |
| "/users/:id/photos" | "UserPhotos"
| "/new-photo" | "NewPhotoContainer" |
| "/user-search" | "UserSearch" |
