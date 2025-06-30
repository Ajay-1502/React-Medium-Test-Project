import ReactDOM from 'react-dom';
import './Modal.css';

const Backdrop = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose}></div>;
};

const ModalOverLay = ({ children }) => {
  return <div className="modal">{children}</div>;
};

const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{children}</ModalOverLay>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Modal;
