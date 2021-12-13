import React, { FC, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Header, StyledModal, HeaderText, CloseButton, Content, Backdrop } from './Modal.Style';
import { IoClose } from 'react-icons/io5'

export interface ModalProps {
    isShown: boolean;
    hide: () => void;
    modalContent: JSX.Element;
    headerText: string;
    modalHeight: number;
    modalWeight: number;
}

export const Modal: FC<ModalProps> = (props) => {
    const modal = (
        <Fragment>
            <Backdrop />
            <Wrapper>
                <StyledModal height={props.modalHeight} weight={props.modalWeight} >
                    <Header>
                        <HeaderText>{props.headerText}</HeaderText>
                        <CloseButton onClick={props.hide}><IoClose /></CloseButton>
                    </Header>
                    <Content>{props.modalContent}</Content>
                </StyledModal>
            </Wrapper>
        </Fragment>
    );
    return props.isShown ? ReactDOM.createPortal(modal, document.body) : null;
};