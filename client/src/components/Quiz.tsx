import styled from "styled-components";
import { useContext } from "react";
import {
  ContextData,
  ContextProgress,
  Rank,
  CorrectAnswers,
} from "../ContextApi";


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
  font-size: 30px;
  color: #545454;
`;

const H3 = styled.h3`
  font-size: 20px;
  color: #44bdb9;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const PAnswers = styled.span`
  font-size: 20px;
  color: #545454;
`;

const Span: any = styled.span`
  font-size: ${(props: {size: string}) => props.size};
  color: #44bdb9;
  font-weight: 900;
`;
// End Styled Components

const Quiz = (props: {practice: boolean}) => {
  const data: any = useContext(ContextData);
  const questionNumber = useContext(ContextProgress);
  const rank = useContext(Rank);
  const correctAnswers = useContext(CorrectAnswers);

  return (
    <Container>
      {props.practice && <P>{`Question ${questionNumber + 1} / 10`}</P>}
      <H1>
        {props.practice
          ? "What is categorizing the word?"
          : "Questions completed"}
      </H1>
      <H3>
        {props.practice ? (
          data.word ? (
            `${data.word}`
          ) : (
            "Loading..."
          )
        ) : (
          <>
            <PAnswers>
              Correct Answers:
              <Span size="20px">
                {` ${correctAnswers ? correctAnswers : "Loading..."} / 10 `}
              </Span>
              Your Score Is:
              <Span size="20px">
                {` ${
                  correctAnswers ? (correctAnswers / 10) * 100 : "Loading..."
                }% `}
              </Span>
            </PAnswers>
            <Span size="25px">
              Your Rank Is:
              <Span>{` ${rank ? rank : "Loading..."}%`}</Span>
            </Span>
          </>
        )}
      </H3>
    </Container>
  );
};

export default Quiz;
