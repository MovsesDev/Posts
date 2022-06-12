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

export const closeBtn = styled.button<ModalWrapProps>`
${props => props.isPopupVisible !== false ?
  `position: absolute;
  top: 10%;
  right: 1%;
    padding: 0;
    border: 0;
    color: white;
    cursor: pointer;
    background: none;
    font-size: 35px;
  ` : ``
}
`;


