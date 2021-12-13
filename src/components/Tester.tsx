import React, { FC, Fragment, useEffect, useState } from 'react'
import { useModal } from '../hooks/useModal';
import { ToastAction } from '../shared/enums';
import ConfirmationModal from './shared/Modal/Basics/Confirmation.Modal';
import { Modal } from './shared/Modal/Modal';


interface TesterProps {
    notify: (message: string, type: ToastAction) => void,
    openModal: () => void
}

const Tester: FC<TesterProps> = ({ notify, openModal }) => {
    const [text, setText] = useState("")
    const [isConfirm, setIsConfirm] = useState(false)
    const { isShown, toggle } = useModal()

    const onChangeText_Handler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setText(e.target.value);
    }

    const onClick_Handler = (e: React.MouseEvent<HTMLButtonElement>) => {
        effect()
    }

    const onKeyDown_Handler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") {
            return;
        }

        effect()
    }

    const openConfirmationModal = () => {
        setIsConfirm(true);
        toggle();
    }

    const onConfirm = () => {
        hideModal()
    }

    const onCancel = () => {
        hideModal()
    }

    const hideModal = () => {
        setIsConfirm(false);
        toggle();
    }

    const effect = () => {
        if (text === "") {
            notify("invalid value", ToastAction.Error)
            return;
        }

        setText("");
        notify(text, ToastAction.Success);
    }

    const content = <Fragment>Hey, I'm a model.</Fragment>;

    const contentConfirm = <ConfirmationModal
        onConfirm={onConfirm}
        onCancel={onCancel}
        message="Are you sure you want to delete element?"
    />

    useEffect(() => {
        setText("");
    }, [])

    return (
        <div className="">
            <div>
                <input type="text" value={text} onChange={onChangeText_Handler} onKeyDown={onKeyDown_Handler} />
                <button onClick={onClick_Handler} >Click</button>
            </div>
            <div>
                <button onClick={toggle} >Open Modal</button>
            </div>

            <div>
                <button onClick={openConfirmationModal} >Open Confirmation Modal</button>
            </div>

            <Modal
                modalHeight={150}
                modalWeight={150}
                isShown={isShown} 
                hide={hideModal} 
                modalContent={isConfirm ? contentConfirm : content} 
                headerText="Modal Title" 
            />
        </div>
    );
}

export default Tester;