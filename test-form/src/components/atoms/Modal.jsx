import React, { useState } from "react";
import { Button } from "../atoms/Button";
import { createPortal } from 'react-dom'

export const Modal = ({
  className,
  onModalClose,
  buttonLabel,
  text,
  header,
  centralPosition,
  small,
  ...props
}) => {
  return createPortal(
    <div className="modal__background">
    <div className={'modal ' + (small ? '-small' : '-big')}>
      <Button onClick={onModalClose}>
        <img src={""} alt="Закрыть" />
      </Button>
      <div className='modal__header'>{header}</div>
      <div className='modal__body'>{text}</div>
      <Button className='modal__bottom' label={buttonLabel} onClick={onModalClose}></Button>
    </div>
    </div>,
    document.body
  );
};

