import React from 'react';
import ReactModal from 'react-modal';
import Modal from './modal_content';


export default function Modal_Screen(props){
return(
  <React.Fragment>

  <ReactModal
    isOpen={props.isOpen}
    contentLabel="onRequestClose Example"
    onRequestClose={props.handleCloseModal}
    shouldCloseOnOverlayClick={false}
    className="Modal"
    ariaHideApp={false}
  >
    <Modal ModalOff={props.ModalOff} />
  </ReactModal>
</React.Fragment>
)
}