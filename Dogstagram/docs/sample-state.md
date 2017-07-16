```js
{
  currentUser: {
    id: 1,
    username: "john"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    newPhoto: {errors: [""]}
  },
  photos: {
    1: {
      description: "my new picture",
      user_id: 1,
      likes: {
        1: {
          photo_id: 1,
          user_id: 2
        },
      comments: {
        1: {
          photo_id: 1,
          body: "great picture",
          user_id: 2
          }
        }
      }
    }
  },
}
```
