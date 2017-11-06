import { connect } from 'react-redux';
import { requestAllUsers } from '../../actions/users_actions';
import {withRouter} from 'react-router';
import Search from './search';


const mapStateToProps = ({users}) => ({
  users: requestAllUsers()
});

const mapDispatchToProps = dispatch => ({
  requestAllUsers: () => dispatch(requestAllUsers())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
