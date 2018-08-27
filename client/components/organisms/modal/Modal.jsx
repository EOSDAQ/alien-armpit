import React from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { ModalStyled, ModalDialogue } from './Modal.styled';
import InstallScatter from './modals/InstallScatter';
import OtpInitModal from './modals/OtpInitModal';
import OtpCheckModal from './modals/OtpCheckModal';
import _modal from 'reducer/modal/modalReducer';

class Modal extends React.Component {
  componentDidUpdate(prevProps) {
    const { modal } = this.props;
    if (prevProps.modal && !modal) {
      this.resetBodyScroll();
    } else if (!prevProps.modal && modal) {
      this.preventBodyScroll();
    }
  }

  resetBodyScroll() {
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
  }
  
  preventBodyScroll() {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  }

  onModalClick(e) {
    const { closeModal } = this.props;

    if (e.currentTarget === e.target) {
      closeModal();
    }
  }

  mapModalTypeToComponent() {
    const { modal } = this.props;
    if (!modal) return null;

    const { type } = modal;

    switch (type) {
      case 'INSTALL_SCATTER':
        return <InstallScatter />;
      case 'OTP_INIT':
        return <OtpInitModal />;
      case 'OTP_CHECK':
        return <OtpCheckModal />;
      default:
        return null;
    }
  }

  render() {
    const rootNode = document.getElementById('modal');
    const { modal } = this.props;

    if (!rootNode || !modal) {
      return null;
    }

    return createPortal(
      <ModalStyled
        onClick={e => this.onModalClick(e)}
      >
        <ModalDialogue>
          {this.mapModalTypeToComponent()}
        </ModalDialogue>
      </ModalStyled>,
      rootNode,
    );
  }
}

const mapStateToProps = ({ modal }) => ({ modal });

const mapDispatchToProps = (dispatch) => ({
  closeModal: (payload) => {
    dispatch(_modal.actions.closeModal(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
