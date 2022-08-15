import styled from "styled-components";
import { useContext } from "react";
import { ContextData } from "../App";

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

const Quiz = (props) => {
  const data = useContext(ContextData);
  return (
    <Container>
      <P>{props.practice && "Question 1 / 10"}</P>
      <H1>
        {props.practice
          ? "What is categorizing the word according to their part of speech?"
          : "Questions completed"}
      </H1>
      <H3>{props.practice ? `${data.word}` : `Your Rank Is: ${5}`}</H3>
    </Container>
  );
};

export default Quiz;
