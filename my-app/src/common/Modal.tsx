import React, { ComponentState, Dispatch, SetStateAction } from 'react'
import * as s from './ModalWrap'


interface ModalProps {
  onCancelPress: Dispatch<SetStateAction<boolean>>,
  children: ComponentState
  isPopupVisible: boolean,
  setIsAddPostVisible: React.Dispatch<SetStateAction<boolean>>,
}



const Modal: React.FC<ModalProps> = ({isPopupVisible, onCancelPress, children, setIsAddPostVisible}) => {

const handleClose = () => {
  setIsAddPostVisible(false)
  onCancelPress(false)
}

  return isPopupVisible === true ?  (
    <s.ModalWrap isPopupVisible={isPopupVisible}>
      <s.closeBtn isPopupVisible={isPopupVisible} onClick={handleClose}>X</s.closeBtn>
      {children}
    </s.ModalWrap>
  )  : (<div> </div>)
}

export default Modal