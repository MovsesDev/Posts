import styled from "styled-components";

interface ModalWrapProps {
    isVisible: object | null
}

export const ModalWrap = styled.div<ModalWrapProps>`
${props => props.isVisible !== null 
? `height: 100vh;
width: 100vw;
background-color: rgba(0,0,0,0,4);
position: fixed;
top: 0;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;` : `
`}
`
  


