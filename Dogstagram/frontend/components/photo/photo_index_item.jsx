import React, { Component } from 'react';
import Modal from 'react-modal';

class PhotoIndexItem extends Component {
  constructor({photo}, props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      url: photo.url,
      id: photo.id
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    window.location.reload();
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
                  </div>
                </Modal>
            </button>

        </li>
      </div>
    );
  }
}
// const PhotoIndexItem = ({ photo }) => (
//   <li className="photo-index-item">
//       <button onClick={modalIsOpen(true)} >
//         <img src={photo.url} alt={photo.id} className="photo-index-item" />
//           <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           shouldCloseOnOverlayClick={false}
//           contentLabel="PhotoShowModal"
//           className="photo-show-modal"
//           >
//             <div className="image-show-modal-box">
//               <img src={photo.url} alt={photo.id} className="photo-index-item" />
//             </div>
//           </Modal>
//       </button>
//
//
//
//
//   </li>
// );

export default PhotoIndexItem;
