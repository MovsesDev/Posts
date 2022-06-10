import React, { ComponentState, Dispatch, SetStateAction } from 'react'
import { Post } from '../components/PostCard/PostCard';
import * as s from './ModalWrap'


interface ModalProps {
    isVisible: Post | null,
    onCancelPress: Dispatch<SetStateAction<Post | null>>,
    children: ComponentState
}


const Modal: React.FC<ModalProps> = ({isVisible, onCancelPress, children}) => {
  return !isVisible ? null : (
    <s.ModalWrap isVisible={isVisible}>
      <s.closeBtn isVisible={isVisible} onClick={() => onCancelPress(null)}>X</s.closeBtn>
      {children}
    </s.ModalWrap>
  )
}

export default Modal