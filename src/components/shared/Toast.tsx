import React, { FC, Fragment, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { ToastAction } from '../../shared/enums';

interface ToastProps {
    message: string,
    toastType: ToastAction
}

const Toast: FC<ToastProps> = ({ message, toastType }) => {

    let toastCallback;

    useEffect(() => {
        switch (toastType) {
            case ToastAction.Info:
                toastCallback = toast.info(message);
                break;
            case ToastAction.Success:
                toastCallback = toast.success(message);    
                break;
            case ToastAction.Warn:
                toastCallback = toast.warn(message);    
                break;
            case ToastAction.Promise:
                // toastCallback = toast.promise(message);    
                break;
            case ToastAction.Error:
                toastCallback = toast.error(message);
                break;
            default:
                toastCallback = toast(message);    
                break;
        }

    }, [message, toastType])

    return (
        <Fragment>
            
            {toastCallback}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </Fragment>
    );
}

export default Toast;