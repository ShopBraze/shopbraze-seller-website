import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect } from 'react';
import useModal from './use-modal';
import CloseIcon from "assets/icons/modal-close-icon.svg"
import Button from 'common-components/button/button';
import Image from 'next/image';

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
  showCloseIcon?: boolean
};



Modal.Dialog = ({ open, handleOpenToggle, closeOnOutsideClick, children, className, overlayClass, showCloseIcon }: ModalDialogProps) => {
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
        <div className="relative flex justify-center h-screen items-center">

          {/* Overlay */}
          <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${overlayClass}`} />

          {/* Main Content */}
          <div className={`${className} z-[60] fixed left-0 bottom-0 md:relative inline-block `} onClick={(e) => { e?.stopPropagation() }}>
            {children}
            {
              showCloseIcon && <div className="h-8 w-8 md:h-6 md:w-6 flex justify-center bg-[#fff] rounded-full absolute right-[50%] md:-right-3 -top-2.5 cursor-pointer">
                <Image src={CloseIcon} alt="close.svg" onClick={handleOpenToggle} className='' />
              </div>
            }
          </div>

        </div>
      </Dialog>
    </Transition>
  );
};





export default Modal;
