import React, { Fragment, useState } from 'react';
import { ToastAction } from './shared/enums';
// Components
import Toast from './components/shared/Toast';
import Tester from './components/Tester';

import './App.css';

function App() {
  // icons                  // React icons
  // Mensajes               // React Toastify
  // Ventana de preguntas   // SweetAlert 
  // Controles dinámicos
  // Formulario dinámico

  const [showToast, setShowToast] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [messageToast, setMessageToast] = useState("")
  const [typeToast, setTypeToast] = useState(ToastAction.Default)

  const setToast = (_message: string, _type: ToastAction) => {
    setMessageToast(_message);
    setTypeToast(_type);
    setShowToast(true);
  }

  return (
    <Fragment>
      <div className="App">

        <Tester notify={setToast} openModal={() => setOpenModal(!openModal)}/>
        {
          showToast && <Toast message={messageToast} toastType={typeToast} />
        }
      </div>
    </Fragment>
  );
}

export default App;
