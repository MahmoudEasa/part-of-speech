import styled from "styled-components";
import { useContext } from "react";
import { ContextData, ContextProgress, Rank } from "../ContextApi";

// Start Styled Components
const Container = styled.div`
  padding: 20px 50px 0;
  text-align: center;
`;

const P = styled.p`
  font-size: 14px;
  text-align: start;
  margin-bottom: 10px;
`;

const H1 = styled.h1`
  font-size: 20px;
  color: #545454;
`;

const H3 = styled.h3`
  font-size: 20px;
  color: #44bdb9;
  margin: 20px 0;
`;
// End Styled Components

const Quiz = (props) => {
  const data = useContext(ContextData);
  const questionNumber = useContext(ContextProgress);
  const rank = useContext(Rank);
  return (
    <Container>
      {props.practice && <P>{`Question ${questionNumber + 1} / 10`}</P>}
      <H1>
        {props.practice
          ? "What is categorizing the word?"
          : "Questions completed"}
      </H1>
      <H3>
        {props.practice
          ? data.word
            ? `${data.word}`
            : "Loading..."
          : `Your Rank Is: ${rank ? rank : "Loading..."}%`}
      </H3>
    </Container>
  );
};

export default Quiz;
