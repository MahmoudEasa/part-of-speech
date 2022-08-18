import styled from "styled-components";
import { Mobile } from "../responsive/Responsive";
import Button from "./Button";
import ButtonQuiz from "./ButtonQuiz";
import ProgressBar from "./ProgressBar";
import Quiz from "./Quiz";

// Start Styled Components
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
  ${Mobile({ margin: "20px 0", justifyContent: "center", gap: "20px" })}

  &::before {
    content: "?";
    position: absolute;
    bottom: 40px;
    right: -20px;
    width: 40px;
    height: 40px;
    background-color: #a47ae2;
    border-radius: 50%;
    display: ${(props: {practice: boolean}) => (props.practice ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 25px;
    ${Mobile({ display: "none" })}
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
  ${Mobile({ display: "none" })}
`;
// End Styled Components

const HomeContainer = (props: {practice: boolean, rank: boolean}) => {
  return (
    <Container practice={props.practice}>
      {/* Practice Page */}
      {props.practice ? (
        <>
          <ProgressBar />
          <Hr />
          {/* If {Practice} Show Practice Data {Else} Show Rank Data */}
          <Quiz practice />
          <ButtonQuiz />
        </>
      ) : (
        // Rank Page
        <>
          <ProgressBar />
          <Hr />
          <Quiz practice={false} />
          <Hr />
          <ContainerBtn>
            <Button
                bgColor="#29a29e"
                radiusNums="20px"
                value="Try Again"
                next disabled={false} hover={""}
              />
          </ContainerBtn>
        </>
      )}
    </Container>
  );
};

export default HomeContainer;
