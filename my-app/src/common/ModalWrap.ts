import styled from "styled-components";
import { Post } from "../components/PostCard/PostCard";

interface ModalWrapProps {
  isVisible: Post | null;
}

export const ModalWrap = styled.div<ModalWrapProps>`
  ${(props) =>
    props.isVisible !== null
      ? `height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 2s;
    align-items: center;`
      : `display:none;
      transition: all 2s;
`}
`;

export const closeBtn = styled.button`
position: absolute;
top: 0;
right: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
  background: none;
  font-size: 35px;
`;
