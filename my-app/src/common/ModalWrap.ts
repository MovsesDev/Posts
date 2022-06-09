import styled from "styled-components";

interface ModalWrapProps {
    isVisible: object | null
}

export const ModalWrap = styled.div<ModalWrapProps>`
  height: 100vh;
  width: 100vw;
  /* background-color: ${(props) => props.isVisible !== null
    ? 'white'
    : 'white'}; */
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

