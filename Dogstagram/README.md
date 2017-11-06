# Dogstagram

  [Heroku link][heroku]
  [heroku]: https://dogstagrm.herokuapp.com/#/

## About Dogstagram

  Dogstagram is a full-stack web app based off Instagram that allows dog lovers to share photos of dogs with each other. Dogstagram uses a Ruby on Rails backend, with a PostgreSQL database, and React/Redux on the frontend.

## Features


#### Following
  Following users was slightly harder than I anticipated. For starters, at the database level, I used a self-join table with my ```Follows``` table that held foreign keys, ```follower_id``` and ```followee_id```, to the ```Users``` table.

  To create a follow, I used the current user's ```User``` table primary Id as the ```follower_id```, and the ```followee_id``` I retrieved from the ```user_id``` on the route of a user's profile page. An action is dispatched to check if a ```Follow``` exists with the current user as the follower and the other user as the followee, and returns a boolean.

  This boolean is stored in the ```Users``` state to determine whether the current user already follows another user. The boolean dictates whether an unfollow or follow button is rendered, which correspond to destroy and create follow actions respectively.

  A small issue I ran into was that the user ID pulled from the route was being returned as a string. This was causing a follow button to appear on my current user's profile because the boolean that checks whether the current user's Id was equivalent to the user Id pulled from the route was returning false. I corrected this by calling ```parseInt()```.

  ```javascript
  followCondition() {
    if (this.props.currentUser.id !==
      parseInt(this.props.match.params.user_id)) {
      if (this.props.users.entities[this.props.match.params.user_id]
        && this.props.users.followed) {
        return (
          <button className="follow-button" onClick={this.unfollow}>
            Unfollow
          </button>
        );
      } else {
        return (
          <button className="follow-button" onClick={this.follow}>
            Follow
          </button>
        );
      }
    } else {
      return (
        <button className="edit-profile-button">Edit Profile</button>
      );
    }
  }
  ```

#### User's Follow Feed/Profile Photo Feed

  The photo feed of the current user's followees was the next step after finishing follows. This part was difficult because my ```PhotosController``` needed to handle two different index methods, one to retrieve all photos for a user's profile page and another to retrieve all of the followee's photos.

  I handled this by setting up a boolean in my ```PhotosController```. If a ```user_id``` is passed in through the params then all photos for that user would be returned, otherwise if no ```user_id``` is passed through all of the current user's followees' photos would be returned.

  ```javascript
    def index
      if params[:user_id]
        @photos = Photo.where(user_id: params[:user_id])
      else
        @photos = current_user.followees.includes(:photos).map(&:photos).flatten
      end

    end
  ```

  ![alt text](http://res.cloudinary.com/roscoe/image/upload/v1501282157/Screen_Shot_2017-07-28_at_3.45.17_PM_c01wuc.png)

## Further Plans for Dogstagram

I plan to continue to work on Dogstagram to implement all of the features I have envisioned. Listed below are some of these features.

#### User Search

I plan to allow users to search for one another through usernames. This is crucial to the site, and will likely be the first next step I take.


#### Dog Breed Tags

I would like to create tags for all dog breeds and dog breed mixes. I envision this feature having a search bar to view photos based on tags, and potentially being able to add favorite breeds. Ideally, there would be a My Favorites page that would show photos of breeds that the user flagged as favorites.
