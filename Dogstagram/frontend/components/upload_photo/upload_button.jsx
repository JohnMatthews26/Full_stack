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
      (error, image) =>{
        if (!error) {
          this.setState({url: image[0].url});
        }
      }
    );
  }


  handleSubmit(e) {
    e.preventDefault();
    const image = this.state;
    this.props.createPhoto({image});
  }

  update(e){
    return event => this.setState({[e]: event.target.value});
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
    window.location.reload();
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
              <form className="upload-image-form" onSubmit={this.handleSubmit}>
                <button className="upload-image-button" onSubmit={this.upload}>Select a Photo</button>
                <label className="description-label">Add a description
                  <input type="text"
                    value={this.state.description}
                    onChange={this.update('description')}
                    className="description-input"
                  />
                </label>
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
