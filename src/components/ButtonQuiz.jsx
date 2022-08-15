import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonQuiz = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button radiusNums="20px 0px 0px 20px" value="Adjuctive" />
        <Button value="Adverb" />
        <Button value="Noun" />
        <Button radiusNums="0px 20px 20px 0px" value="Verb" />
      </ButtonContainer>
      <Button radiusNums="20px" value="Next" next />
    </Container>
  );
};

export default ButtonQuiz;
