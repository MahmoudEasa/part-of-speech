import { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "./components/Header";
import Practice from "./pages/Practice";
import Rank from "./pages/Rank";

// Styled Components
const Container = styled.div``;

export const ContextProgress = createContext();
export const ContextData = createContext();

const App = () => {
  const [data, setData] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

  const [question, setQuestion] = useState({});

  const [questionDone, setQuestionDone] = useState(0);

  return (
    <Container>
      <ContextProgress.Provider value={questionDone}>
        <ContextData.Provider value={question}>
          <Header />
          {data.length !== 0 ? <Practice /> : <Rank />}
        </ContextData.Provider>
      </ContextProgress.Provider>
    </Container>
  );
};

export default App;
