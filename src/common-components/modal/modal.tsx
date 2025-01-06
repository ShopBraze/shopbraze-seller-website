import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect } from 'react';
import useModal from './use-modal';
import Button from 'common-components/button/button';

type ModalProps = {
  children: (props: { open: boolean; handleOpenToggle: () => void }) => React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const { open, handleOpenToggle } = useModal();

  return <>{children({ open, handleOpenToggle })}</>;
};

type ModalButtonProps = {
  children: React.ReactNode | string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

Modal.Button = ({ children, ...props }: ModalButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

type ModalDialogProps = {
  open?: boolean;
  handleOpenToggle?: any;
  closeOnOutsideClick?: boolean
  children: React.ReactNode;
  className?: string;
  overlayClass?: string;
};



Modal.Dialog = ({ open, handleOpenToggle, closeOnOutsideClick, children, className, overlayClass }: ModalDialogProps) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto z-[60] flex w-screen items-center justify-center bg-black/30 transition duration-300 ease-out data-[closed]:opacity-0"
        onClose={handleOpenToggle || (() => { })}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        onClick={closeOnOutsideClick ? handleOpenToggle : undefined}
        transition
      >
        <div className="flex justify-center h-screen items-center">

          {/* Overlay */}
          <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${overlayClass}`} />

          {/* Main Content */}
          <div className={`${className} z-[60] fixed left-0 bottom-0 md:relative inline-block `} onClick={(e) => { e?.stopPropagation() }}>
            {children}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};





export default Modal;
