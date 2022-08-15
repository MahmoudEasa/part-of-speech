import styled from "styled-components";
import Button from "./Button";
import ButtonQuiz from "./ButtonQuiz";
import ProgressBar from "./ProgressBar";
import Quiz from "./Quiz";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  margin: 50px 100px;
  padding: 20px 0px 50px;
  border: 1px solid lightgray;
  height: 70vh;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  position: relative;

  &::before {
    content: "?";
    position: absolute;
    bottom: 40px;
    right: -20px;
    width: 40px;
    height: 40px;
    background-color: #a47ae2;
    border-radius: 50%;
    display: ${(props) => (props.practice ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 25px;
  }
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Hr = styled.hr`
  border: none;
  background-color: lightgray;
  height: 2px;
`;

const HomeContainer = (props) => {
  return (
    <Container practice={props.practice}>
      {props.practice ? (
        <>
          <ProgressBar />
          <Hr />
          <Quiz practice />
          <ButtonQuiz />
        </>
      ) : (
        <>
          <ProgressBar />
          <Hr />
          <Quiz />
          <Hr />
          <ContainerBtn>
            <Button radiusNums="20px" value="Try Again" next />
          </ContainerBtn>
        </>
      )}
    </Container>
  );
};

export default HomeContainer;
