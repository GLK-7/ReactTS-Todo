import styles from './Modal.module.css';

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    console.log(e.type)
    const modal = document.querySelector('#modal');
    modal!.classList.add('hide');
  };

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Titulo Modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
