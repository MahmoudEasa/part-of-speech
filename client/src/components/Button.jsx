import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: ${(props) => (props.next ? "#44bdb9" : "#aedcda")};
  padding: ${(props) => (props.next ? "10px 50px" : "10px 20px")};
  border: none;
  border-radius: ${(props) => props.radiusNums};
  cursor: pointer;
  width: ${(props) => (props.next ? "auto" : "100px")};
  color: #2f2f2f;
  font-weight: bold;

  &:hover {
    background-color: #44bdb9;
  }
`;

const Button = (props) => {
  return (
    <ButtonStyle next={props.next} radiusNums={props.radiusNums}>
      {props.value}
    </ButtonStyle>
  );
};

export default Button;
