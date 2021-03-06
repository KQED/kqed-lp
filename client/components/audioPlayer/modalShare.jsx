import React from 'react';
import Modal from 'react-modal';
//zero clipboard enables the user to copy and paste the url/iframe to their clipboard
import ZeroClipboard from 'react-zeroclipboard';

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
  }
  render() {
    const { audioUrl } = this.props;
    return (
      <span>
        <button className="ui button" onClick={this.openModal}>
          <i className="share square icon"></i>
          Share this track
        </button>        
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal} style={customStyles}>
          <i className="big remove circle icon" onClick={this.closeModal}></i>
          <h2>Share this track</h2>
          <div className="ui action input">
            <input type="text" name="country" value={audioUrl} readOnly />
            <ZeroClipboard text={audioUrl}>
              <button className="ui right icon green button">
                  <i className="copy icon"></i>
              </button>
            </ZeroClipboard>
          </div>
        </Modal>
      </span>
    );
  }
}
