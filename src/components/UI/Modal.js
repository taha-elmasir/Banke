import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <button className={styles.close} onClick={props.onCloseModal}>
          &times;
        </button>
        <h2 className={styles.modal_header}>Instant Business Bank Account</h2>

        <form className={styles.modal_form}>
          <label>First Name</label>
          <input type="text" placeholder="Your First Name" />
          <label>Last Name</label>
          <input type="text" placeholder="Your Last Name" />
          <label>Email Address</label>
          <input type="email" placeholder="Your E-mail" />
          <button className="btn" type="button">
            Next step &rarr;
          </button>
        </form>
      </div>
    </div>
  );
};

const portalEl = document.querySelector("#overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        portalEl
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onCloseModal={props.onCloseModal} />,
        portalEl
      )}
    </Fragment>
  );
};

export default Modal;
