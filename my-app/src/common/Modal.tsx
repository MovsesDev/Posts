import React, { ComponentState, SetStateAction } from 'react'
import * as s from './ModalWrap'


interface ModalProps {
  children: ComponentState
  isPopupVisible: boolean,
  setIsPopupVisible: React.Dispatch<SetStateAction<boolean>>,
}



const Modal: React.FC<ModalProps> = ({isPopupVisible, children, setIsPopupVisible}) => {

const handleClose = () => {
  setIsPopupVisible(false)
}

  return isPopupVisible === true ?  (
    <s.ModalWrap isPopupVisible={isPopupVisible}>
      <s.closeBtn isPopupVisible={isPopupVisible} onClick={handleClose}>X</s.closeBtn>
      {children}
    </s.ModalWrap>
  )  : null
}

export default Modal