# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Photos

- `GET /api/photos`
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### PhotoFeed

- `GET /api/followees/photos`

### Likes
- `GET /api/photos/:id/likes`
- `POST /api/photos/:id/likes`
- `DELETE /api/photos/:id/likes/:id`
### Follows
- `POST /api/users/:id/follows`
- `DELETE /api/photos/:id/follows/:id`
- `GET /api/users/:id/follows`
### Comments

- `POST /api/photos/:id/comments`
- `DELETE /api/photos/:id/comments/:id`
- `GET /api/photos/:id/comments`
