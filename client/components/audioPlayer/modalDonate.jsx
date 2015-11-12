import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
     position          : 'fixed',
     zIndex            : '4',
     backgroundColor   : 'rgba(255, 255, 255, 0.75)'
   },
  content : {
    top         : '50%',
    left        : '50%',
    padding     : '1%',  
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)'
  }
};


export default class ModalDonate extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalIsOpen: false,
      donated: false
    };
    
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
    this.setState({donated: true});
  }
  render() {
    return (
      <div>
        <button className="ui button" onClick={this.openModal}>
          <i className={!this.state.donated ? "dollar icon" : "heart icon"}></i>
          {!this.state.donated ? "Donate" : "Thank You!"}
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal} style={customStyles}>
          <i className="big remove circle icon" onClick={this.closeModal}></i>
          <h2>Donate to KQED</h2>
        </Modal>
      </div>
    );
  }
}
