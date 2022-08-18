import styled from "styled-components";
import { SyntheticEvent, useContext } from "react";
import { HandleClick } from "../ContextApi";
import { Mobile } from "../responsive/Responsive";

interface Button {
  disabled: boolean,
  bgColor: string,
  radiusNums: string,
  hover: string,
  value: string,
  next: boolean
};

// Start Styled Components
const ButtonStyle: any = styled.button`
  background-color: ${(props: Button) => props.bgColor};
  padding: ${(props) => (props.next ? "10px 50px" : "10px 20px")};
  border: none;
  border-radius: ${(props) => props.radiusNums};
  cursor: pointer;
  width: ${(props) => (props.next ? "auto" : "100px")};
  color: #2f2f2f;
  font-weight: bold;

  ${Mobile({ borderRadius: "20px" })}

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props) => props.hover};
  }
`;
// End Styled Components



const Button = (props: Button) => {
  const handleClick: Function = useContext(HandleClick);

  return (
    <ButtonStyle
      disabled={props.disabled}
      onClick={(e: SyntheticEvent) => handleClick(e)}
      next={props.next}
      bgColor={props.bgColor}
      radiusNums={props.radiusNums}
      hover={props.hover}
    >
      {props.value}
    </ButtonStyle>
  );
};

export default Button;
