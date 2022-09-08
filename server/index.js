const testData = require("./TestData.json");
const express = require("express");
const path = require("path");
const cors = require("cors");
// import express from "express";
// import path from "path";
// import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

// Setup Server
const port = 5000;

//Sign up server
app.listen(process.env.PORT || port, () => {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
});

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

//Get Data
// Sort pos
const adjective = testData.wordList.filter((data) => data.pos === "adjective");
const adverb = testData.wordList.filter((data) => data.pos === "adverb");
const noun = testData.wordList.filter((data) => data.pos === "noun");
const verb = testData.wordList.filter((data) => data.pos === "verb");

app.get("/words", (req, res) => {
  // 10 random data
  const randomData = [
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
  let scoreNum = 0;
  const score = req.body.score;

  testData.scoresList.map((s) => {
    if (score > s) {
      scoreNum++;
    }
  });

  // Send The Rank
  const rank = (scoreNum / testData.scoresList.length) * 100;
  res.status(201).json(+rank.toFixed(2));
});
