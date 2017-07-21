import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { requestAllPhoto } from '../../actions/photo_actions';
import { selectAllPhoto } from '../../reducers/selectors';

const mapStateToProps = ({photo}) => ({
  photo: selectAllPhoto(photo)
});

const mapDispatchToProps = dispatch => ({
  requestAllPhoto: () => dispatch(requestAllPhoto())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
