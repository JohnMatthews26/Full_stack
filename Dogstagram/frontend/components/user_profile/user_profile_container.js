import { connect } from 'react-redux';
import UserProfile from './user_profile';
import {requestSingleUser} from '../../actions/users_actions';

const mapStateToProps = ({ users }) => ({
  users: users
});

const mapDispatchToProps = dispatch => ({
  requestSingleUser: (id) => dispatch(requestSingleUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
