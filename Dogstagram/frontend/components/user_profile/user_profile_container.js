import { connect } from 'react-redux';
import UserProfile from './user_profile';
import {requestSingleUser} from '../../actions/users_actions';
import {getFollow} from '../../actions/follow_actions';
import {requestAllLikes} from '../../actions/likes_actions';
const mapStateToProps = ({ users, session }) => ({
  users: users,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSingleUser: (id) => dispatch(requestSingleUser(id)),
  getFollow: (id) => dispatch(getFollow(id)),
  requestAllLikes: () => dispatch(requestAllLikes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
