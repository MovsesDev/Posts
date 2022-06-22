import styled from "styled-components";

interface ModalWrapProps {
  isPopupVisible: boolean;
}

export const ModalWrap = styled.div<ModalWrapProps>`
  ${(props) =>
    props.isPopupVisible !== false
      ? `height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 1s;
    align-items: center;`
      : `left: -100%;
      transition: all 0.2s;
`}
`;

export const Content = styled.div`
  min-width: 320px;
  padding: 50px 80px;
  background-color: #fff;
  box-shadow: 0 0 5px white;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
`

export const CloseBtn = styled.button<ModalWrapProps>`
${props => props.isPopupVisible !== false ?
  `position: absolute;
  top: 10px;
  right: 3%;
    padding: 0;
    border: 0;
    color: black;
    cursor: pointer;
    background: none;
    font-size: 35px;
  ` : ``
}
`;


