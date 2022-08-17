import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { BgColor, HandleDisabled } from "../ContextApi";
import { Mobile } from "../responsive/Responsive";

// Start Styled Components
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
  ${Mobile({ flexWrap: "wrap", gap: "10px" })}
`;
// End Styled Components

const ButtonQuiz = () => {
  const bgColor = useContext(BgColor);
  const disabled = useContext(HandleDisabled);

  return (
    <Container>
      <ButtonContainer>
        <Button
          bgColor={bgColor.Adjective}
          hover={bgColor.hover}
          radiusNums="20px 0px 0px 20px"
          value="Adjective"
          disabled={!disabled}
        />
        <Button
          disabled={!disabled}
          hover={bgColor.hover}
          bgColor={bgColor.Adverb}
          value="Adverb"
        />
        <Button
          disabled={!disabled}
          hover={bgColor.hover}
          bgColor={bgColor.Noun}
          value="Noun"
        />
        <Button
          bgColor={bgColor.Verb}
          hover={bgColor.hover}
          disabled={!disabled}
          radiusNums="0px 20px 20px 0px"
          value="Verb"
        />
      </ButtonContainer>
      <Button
        bgColor="#29a29e"
        radiusNums="20px"
        value="Next"
        next
        disabled={disabled}
      />
    </Container>
  );
};

export default ButtonQuiz;
