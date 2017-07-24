import { connect } from 'react-redux';
import UploadButton from './upload_button';
import { createPhoto } from '../../actions/photo_actions';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadButton);
