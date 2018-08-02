// @flow

import React from 'react';
import type { Dispatch } from 'redux';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { type AppState } from 'reducer/reducer';
import { ModalStyled, ModalDialogue } from './Modal.styled';
import InstallScatter from './modals/InstallScatter';
import _modal from 'reducer/modal/modalReducer';
import animations from '../../../css/animations';

type Props =
  & $Call<typeof mapStateToProps, AppState>
  & $Call<typeof mapDispatchToProps, *>;

class Modal extends React.Component<Props> {
  componentWillReceiveProps(nextProps) {
    const { modal } = this.props;
    if (modal && !nextProps.modal) {
      this.resetBodyScroll();
    } else if (!modal && nextProps.modal) {
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

const mapStateToProps = ({ modal }: AppState) => ({ modal });

const mapDispatchToProps = (dispatch: *) => ({
  closeModal: (payload) => {
    dispatch(_modal.actions.closeModal(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
