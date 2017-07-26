import { connect } from 'react-redux';
import Follow from './follow';
import { createFollow, destroyFollow } from '../../actions/follow_actions';

import {withRouter} from 'react-router';

const mapStateToProps = ({ users, session }) => ({
  users: users,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createFollow: (followerId, followeeId) =>
  dispatch(createFollow(followerId, followeeId)),
  destroyFollow: (followerId, followeeId) =>
  dispatch(destroyFollow(followerId, followeeId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Follow));
