import React, { ComponentState, SetStateAction } from 'react'
import { ModalWrap, CloseBtn, Content } from './ModalWrap'


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
    <ModalWrap isPopupVisible={isPopupVisible}>
      <Content>
      <CloseBtn isPopupVisible={isPopupVisible} onClick={handleClose}>X</CloseBtn>
      {children}
      </Content>
    </ModalWrap>
  )  : null
}

export default Modal