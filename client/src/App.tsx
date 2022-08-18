import { useContext } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Practice from "./pages/Practice";
import Rank from "./pages/Rank";
import { ContextProgress } from "./ContextApi";

// Styled Components
const Container = styled.div``;

const App = () => {
  const questionDone: number = useContext(ContextProgress);

  return (
    <Container>
      <Header />

      {/*
        {If Answers Number less than 10} run Practice Component
        {Else} Run Rank Component
      */}
      {questionDone < 10 ? <Practice /> : <Rank />}
    </Container>
  );
};

export default App;
