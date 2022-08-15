import { useContext } from "react";
import styled from "styled-components";
import { ContextProgress } from "../App";

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
  width: ${(props) => props.width * 10}%;
  background-color: #2c8784;
  border-radius: 16px;
`;

const progrssLenght = [];
for (let i = 0; i < 10; i++) {
  progrssLenght.push(<ProgressPoint key={i} />);
}

const ProgressBar = () => {
  const progressNumber = useContext(ContextProgress);

  return (
    <Container>
      {progrssLenght}

      <Progress width={progressNumber} />
    </Container>
  );
};

export default ProgressBar;
