import { css } from "styled-components";

export const Mobile = (props: any) => {
  return css`
    @media only screen and (max-width: 640px) {
      ${props}
    }
  `;
};


export const FlexColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;
