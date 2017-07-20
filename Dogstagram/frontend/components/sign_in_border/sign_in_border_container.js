
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import signInBorder from './sign_in_border';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signInBorder);
