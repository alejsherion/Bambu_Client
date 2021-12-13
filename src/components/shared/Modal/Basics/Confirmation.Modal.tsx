import React, { FC, Fragment } from "react";
import { ConfirmationButtons, Message, NoButton, YesButton } from "./Confirmation.Modal.Style";

interface ConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
}

const ConfirmationModal: FC<ConfirmationModalProps> = (props) => {
    return (
        <Fragment>
            <Message>{props.message}</Message>
            <ConfirmationButtons>
                <YesButton onClick={props.onConfirm}>Yes</YesButton>
                <NoButton onClick={props.onCancel}>No</NoButton>
            </ConfirmationButtons>
        </Fragment>
    );
}

export default ConfirmationModal;