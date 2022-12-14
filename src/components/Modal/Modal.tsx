import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled, Overlay } from './Modal.styled';

const modalRoot: HTMLDivElement = document.querySelector('#modal-root')!;

interface IProps {
  closeModal: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<IProps> = ({ children, closeModal }) => {
  useEffect(() => {
    const handleKeyDown: EventListenerOrEventListenerObject = event => {
      if (event instanceof KeyboardEvent && event.code === 'Escape')
        closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  const handleBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closeModal();
  };

  return createPortal(
    <Overlay
      key="modal"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      onClick={handleBackdrop}
    >
      <ModalStyled>{children}</ModalStyled>
    </Overlay>,
    modalRoot
  );
};
