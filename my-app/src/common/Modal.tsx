import React, { ComponentState } from 'react'
import * as s from './ModalWrap'


interface ModalProps {
    isVisible: object | null,
    onCancelPress() : void,
    children: ComponentState
}

const Modal: React.FC<ModalProps> = ({isVisible, onCancelPress}) => {
  return (
    <s.ModalWrap isVisible={{}}>

    </s.ModalWrap>
  )
}

export default Modal