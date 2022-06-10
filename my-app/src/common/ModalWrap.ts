import styled from "styled-components";
import { Post } from "../components/PostCard/PostCard";

interface ModalWrapProps {
  isVisible: Post | null;
}

export const ModalWrap = styled.div<ModalWrapProps>`
  ${(props) =>
    props.isVisible !== null
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
${props => props.isVisible !== null ?
  `position: absolute;
  top: 0;
  right: 0;
    padding: 0;
    border: 0;
    cursor: pointer;
    background: none;
    font-size: 35px;
  ` : ``
}
`;


