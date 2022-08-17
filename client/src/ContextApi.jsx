import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const ContextProgress = createContext();
export const ContextData = createContext();
export const HandleClick = createContext();
export const HandleDisabled = createContext();
export const BgColor = createContext();
export const Rank = createContext();

const ContextApi = (props) => {
  const bgColorInitialValue = {
    Adjective: "#aedcda",
    Adverb: "#aedcda",
    Noun: "#aedcda",
    Verb: "#aedcda",
    hover: "#29a29e",
  };
  const [bgColor, setBgColor] = useState(bgColorInitialValue);
  const [data, setData] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [rank, setRank] = useState(null);
  const [question, setQuestion] = useState({});
  const [questionDone, setQuestionDone] = useState(0);
  const [disabled, setDisabled] = useState(true);

  // Get All Data
  useEffect(() => {
    axios
      .get("http://localhost:5000/words")
      .then((res) => {
        setData(res.data);
        setQuestion(res.data[0]);
        return res.data;
      })
      // Add 1 Question in Question Data
      .catch(() => {
        toast.error("Cant get data try again");
      });
  }, []);

  // Post Score And Get Rank
  useEffect(() => {
    if (questionDone === 10) {
      axios
        .post("http://localhost:5000/rank", {
          score: (correctAnswers / 10) * 100,
        })
        .then((res) => {
          setRank(res.data);
        })
        .catch(() => toast.error("Cant get data"));
    }
  }, [questionDone]);

  const handleClick = (e) => {
    // Questions Answer Buttons
    if (
      e.target.innerHTML === "Adjective" ||
      e.target.innerHTML === "Adverb" ||
      e.target.innerHTML === "Noun" ||
      e.target.innerHTML === "Verb"
    ) {
      setDisabled(false);

      // Get feedback on correct or incorrect answers.
      if (e.target.innerHTML.toLowerCase() === question.pos) {
        setCorrectAnswers((prev) => prev + 1);
        setBgColor({ ...bgColor, [e.target.innerHTML]: "#29a29e", hover: "" });

        toast.success("Correct Answer", {
          icon: "✔️ ",
        });
      } else {
        setBgColor({ ...bgColor, [e.target.innerHTML]: "#f36974", hover: "" });

        toast.error("Wrong Answer", {
          icon: "❌ ",
        });
      }

      // Next Button
    } else if (e.target.innerHTML === "Next") {
      // Increment Answers Number
      setQuestionDone((prev) => prev + 1);
      setBgColor(bgColorInitialValue);
      setDisabled(true);

      // Pop question from the array and add it in question data
      const qustionData = data.pop();
      setQuestion(qustionData);

      // Try Again Button In Quiz Component
    } else if (e.target.innerHTML === "Try Again") {
      // Reload Page to try again
      window.location.reload(false);
    }
  };

  return (
    <>
      <ToastContainer />
      {/* Answers Number */}
      <ContextProgress.Provider value={questionDone}>
        {/* Question Data */}
        <ContextData.Provider value={question}>
          {/* Handle Click for Buttons */}
          <HandleClick.Provider value={handleClick}>
            {/* Handle Disabled for Buttons */}
            <HandleDisabled.Provider value={disabled}>
              {/* Background Color for Buttons */}
              <BgColor.Provider value={bgColor}>
                {/* Rank */}
                <Rank.Provider value={rank}>
                  {/* Add App Component */}
                  {props.children}
                </Rank.Provider>
              </BgColor.Provider>
            </HandleDisabled.Provider>
          </HandleClick.Provider>
        </ContextData.Provider>
      </ContextProgress.Provider>
    </>
  );
};

export default ContextApi;
