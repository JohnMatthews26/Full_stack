import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class UploadButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      url: "",
      modalIsOpen: false

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.upload = this.upload.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS,
      function(error, image) {
        if (!error) {

          this.setState({url: image[0].secure_url});
        }
      }.bind(this)
    );
  }


  handleSubmit(e) {
    e.preventDefault();
    const image = this.state;
    this.props.createPhoto(image);
    window.location.reload();

  }

  update(e){
    return event => this.setState({[e]: event.target.value});
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
      return (
        <div>

          <button className="header-button" onClick={this.openModal}>Upload new image</button>
            <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick={false}
            contentLabel="PhotoFormModal"
            className="photo-upload-modal"
            >
            <div className="modal-box">
              <form className="upload-image-form">
                <button className="upload-image-button" onClick={this.upload}>Select a Photo</button>
                <label className="description-label">Add a description
                  <input type="textarea"
                    value={this.state.description}
                    onChange={this.update('description')}
                    className="description-input"
                  />
                </label>
                <img className="preview-of-upload" src={this.state.url}></img>
                <button className="upload-image-button" onClick={this.handleSubmit}>Submit</button>
                <div className="close-button" >
                  <button onClick={this.closeModal}>Close</button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      );

  }
}

export default UploadButton;
