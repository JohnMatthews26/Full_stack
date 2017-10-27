import React, { Component } from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router';
import LikesContainer from '../likes/likes_container';
import CommentsContainer from '../comments/comments_container';

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
                    <div className="image-show-username">
                      <img className="profile-pic-thumbnail"
                        src="http://res.cloudinary.com/roscoe/image/upload/v1501008468/bulldog_stock_photo_uwszgt.jpg">
                      </img>
                      {this.state.username}

                    </div>
                    <img src={this.state.url} alt={this.state.id} className="photo-show" />
                    <div className="image-show-info">


                      <LikesContainer photo={this.props.photo}/>
                      <div className='username-description'>
                        <div className='username-div'>{this.state.username}</div>
                        <div className="description-div">{this.state.description}</div>
                      </div>
                      <CommentsContainer photo={this.props.photo}/>
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
