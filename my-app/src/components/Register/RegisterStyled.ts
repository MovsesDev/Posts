import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";


export const Register = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 15, 16, 0.4);
`;

export const Form = styled.form`
  display: flex;
  text-align: center;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 200px;
`;

export const Label = styled.label``;

// export const LargeInput = styled(Input)<{ isActive?: boolean }>`
//   background-color: ${(props) => (props.isActive ? "green" : "gray")};
// `;

export const Input = styled.input`
  height: 30px;
  width: 300px;
  border: 2px solid yellow;
  border-radius: 5%;
`;

export const Button = styled.button`
  margin: 5px;
  display: inline-block;
  background-color: aqua;
  text-align: center;
  padding: 5px;
  border: 1px solid black;
  text-decoration: none;
  transition: 0.1s ease;
  color: black;
  &:hover {
    font-size: 14px;
    padding: 7px;
  }
`;

export const NavlinkBtn = styled(NavLink)`

`

export const Paragraph = styled.p`
  color: white;
  font-size: 18px;
`;

// const setInputType = (props: { variant: string }) => {
//   switch (props.variant) {
//     case "secondary":
//       return css`
//         border: 1px solid gray;
//       `;
//     default:
//       return ``;
//   }
// };

// export const ColorInput = styled.input<{ variant: string }>`
//   ${setInputType}
// `;
