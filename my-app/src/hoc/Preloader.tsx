import { ComponentSelector, css } from "@emotion/react";
import { ComponentElement, ComponentState } from "react";
import { ClipLoader } from "react-spinners";

const Preloader: React.FC = () => {
    const override = css`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  `;

    return (
    <ClipLoader color="red" css={override}/>
    )
}

export default Preloader