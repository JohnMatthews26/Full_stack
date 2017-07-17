# Dogstagram

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/ALgfuX0Q/freshernote

## Minimum Viable Product

Dogstagram is a web application based on Instagram built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Production README
- [ ] Images
- [ ] Likes
- [ ] Commenting on images
- [ ] Following & Photo feed


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: /docs/wireframes
[components]: /docs/component-hierarchy.md
[sample-state]: /docs/sample-state.md
[api-endpoints]: /docs/api-endpoints.md
[schema]: /docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Photos Model, API, and components (2 days)

**Objective:** Photos can be created, viewed, edited and destroyed through the API.

### Phase 3: Followers and followees (1 day)

**Objective:** Allow users to follow and be followed.

### Phase 4: Comments and Likes (2 days)

**Objective:** Other users can add comments and like a photo (only one like per user per photo).

### Phase 5: Implement photo feed of all of a user's followees (2 days)

**Objective:** Photo feed is ordered chronologically and successfully only shows followees' photos. Also, remove photos from feed if a user has been unfollowed.


### Bonus Features (TBD)
- [ ] Direct messaging
- [ ] Hashtags
- [ ] Categorizing photos by dog breeds via a dog breed tag
