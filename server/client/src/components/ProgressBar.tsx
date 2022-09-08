import { useContext } from "react";
import styled from "styled-components";
import { ContextProgress } from "../ContextApi";
import { Mobile } from "../responsive/Responsive";

// Start Styled Components
const Container = styled.div`
  background-color: lightgray;
  margin: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 25px;
  border-radius: 16px;
  position: relative;
  gap: 9%;
  padding: 0 20px;
  ${Mobile({ display: "none" })}
`;

const ProgressPoint = styled.span`
  background-color: #fff;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  z-index: 2;
`;

const Progress = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props: {width: number}) => props.width * 10}%;
  background-color: #2c8784;
  border-radius: 16px;
`;
// End Styled Components

const ProgressBar = () => {
  // Increase the progress display with the increase in the number of answers
  const progressNumber = useContext(ContextProgress);

  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container>
      {num.map((n, i) => (
        <ProgressPoint key={i} />
      ))}

      <Progress width={progressNumber} />
    </Container>
  );
};

export default ProgressBar;
