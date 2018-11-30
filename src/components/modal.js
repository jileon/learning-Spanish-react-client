import React from 'react';
import ReactModal from 'react-modal';
import Modal from './modal_content';


export default function ModalScreen(props){
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
    <Modal correct={props.correct} incorrect={props.incorrect} ModalOff={props.ModalOff} />
  </ReactModal>
</React.Fragment>
)
}