import React, { Component } from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router';
import LikesContainer from '../likes/likes_container';

class PhotoIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      url: this.props.photo.url,
      id: this.props.photo.id,
      username: this.props.photo.username,
      description: this.props.photo.description
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);


  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});

  }


  render(){



    return (

      <div>
        <li className="photo-index-item">
            <button onClick={this.openModal} >
              <img src={this.state.url} alt={this.state.id} className="photo-index-item" />
                <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                shouldCloseOnOverlayClick={true}
                contentLabel="PhotoShowModal"
                className="photo-show-modal"
                >
                  <div className="image-show-modal-box">
                    <img src={this.state.url} alt={this.state.id} className="photo-show" />
                    <div className="image-show-info">

                      <div className="image-show-username">
                        <img className="profile-pic-thumbnail"
                          src="http://res.cloudinary.com/roscoe/image/upload/v1501008468/bulldog_stock_photo_uwszgt.jpg">
                        </img>
                        {this.state.username}
                        <LikesContainer photoId={this.props.photo.id}/>
                      </div>

                      <section className="description-section">{this.state.description}</section>
                    </div>
                  </div>
                </Modal>
            </button>

        </li>
      </div>
    );
  }
}

export default withRouter(PhotoIndexItem);
