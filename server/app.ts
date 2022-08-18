import testData from "./TestData.json";
import express from "express";
const app = express();
import cors from "cors";

app.use(express.json());
app.use(cors());

// Setup Server
const port: number = 5000;

//Sign up server
app.listen(port, () => {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
});

//Get Data
// Sort pos
const adjective: object[] = testData.wordList.filter((data: { pos: string; }) => data.pos === "adjective");
const adverb: object[] = testData.wordList.filter((data: {pos: string}) => data.pos === "adverb");
const noun: object[] = testData.wordList.filter((data: { pos: string; }) => data.pos === "noun");
const verb: object[] = testData.wordList.filter((data: { pos: string; }) => data.pos === "verb");

app.get("/words", (_req, res) => {
  // 10 random data
  const randomData: object[] = [
    ...adverb,
    ...adjective.sort(() => 0.5 - Math.random()).slice(0, 2),
    ...noun.sort(() => 0.5 - Math.random()).slice(0, 3),
    ...verb.sort(() => 0.5 - Math.random()).slice(0, 3),
  ];

  // Send 10 random items
  res.send(randomData.sort(() => 0.5 - Math.random()));
});

//Post Data
app.post("/rank", (req, res) => {
  let scoreNum: number = 0;
  const score: number = req.body.score;

  testData.scoresList.map((s: number) => {
    if (score > s) {
      scoreNum++;
    }
  });

  // Send The Rank
  const rank: number = (scoreNum / 30) * 100;
  res.status(201).json(+rank.toFixed(2));
});
