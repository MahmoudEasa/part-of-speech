import { useEffect, useState, createContext, ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";
import { axiosInstance } from "./config";

export const ContextProgress = createContext<number>(0);
export const ContextData = createContext<object>({});
export const HandleClick = createContext<Function >(Function);
export const HandleDisabled = createContext<boolean>(true);
export const BgColor = createContext<object>({});
export const Rank = createContext<number | string>("Loading...");
export const CorrectAnswers = createContext<number>(0);

const ContextApi = (props: {children: ReactNode;}) => {
  const bgColorInitialValue: {
    Adjective: string;
    Adverb: string;
    Noun: string;
    Verb: string;
    hover: string;
  } = {
    Adjective: "#aedcda",
    Adverb: "#aedcda",
    Noun: "#aedcda",
    Verb: "#aedcda",
    hover: "#29a29e",
  };
  const [bgColor, setBgColor] = useState<object>(bgColorInitialValue);
  const [data, setData] = useState<object[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [rank, setRank] = useState<number | string>("Loading...");
  const [question, setQuestion] = useState<any>({});
  const [questionDone, setQuestionDone] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(true);

  // Get All Data
  useEffect(() => {
    axiosInstance
      .get("/words")
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

      axiosInstance
        .post("/rank", {
          score: (correctAnswers / 10) * 100,
        })
        .then((res) => {
          setRank(res.data);
        })
        .catch(() => toast.error("Cant get data"));
    }
  }, [correctAnswers, questionDone]);

  const handleClick = (e: { target: { innerHTML: string; }; }) : void => {
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
      window.location.reload();
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
                  <CorrectAnswers.Provider value={correctAnswers}>
                    {/* Add App Component */}
                    {props.children}
                  </CorrectAnswers.Provider>
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
