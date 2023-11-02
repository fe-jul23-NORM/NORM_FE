import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import { createPortal } from 'react-dom';
import './Modal.scss';
import { hideScrollbar, showScrollbar, useOutsideClick } from '../../utils/functions';

type Props = {
  children?: React.ReactNode
  outsideHandler?: () => void;
  closeFunc?: () => void;
  withCloseIcon?: boolean,
}

const Modal: React.FC<Props> = ({ children, outsideHandler, withCloseIcon, closeFunc }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, outsideHandler || (() => null));
  
  const handleEscapeKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      if (outsideHandler) {
        outsideHandler();
        return;
      }
      if (closeFunc) {
        closeFunc();
      }
    }
  };
  
  const handleClose = () => {
    if (outsideHandler) {
      outsideHandler();
      return;
    }
    if (closeFunc) {
      closeFunc();
    }
  };
  
  useEffect(() => {
    const hasScroll = document.documentElement.scrollHeight > window.innerHeight;
    window.addEventListener('keydown', handleEscapeKeyPress);
    
    if (hasScroll) {
      hideScrollbar();
      
      return () => {
        showScrollbar();
        window.removeEventListener('keydown', handleEscapeKeyPress);
      };
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, []);
  
  const mount = document.getElementById('portal-root');
  
  return createPortal(
    <div className='modal'>
      <div
        ref={modalRef}
        className='modal__content'
      >
        {withCloseIcon && (
          <span
            className={cn('icon-close', 'modal__close')}
            onClick={handleClose}
          />
        )}
        {children}
      </div>
    </div>,
    mount as HTMLElement,
  );
};

export default Modal;
