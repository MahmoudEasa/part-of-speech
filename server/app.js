"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TestData_json_1 = __importDefault(require("./TestData.json"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = 5000;
app.listen(port, () => {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
});
const adjective = TestData_json_1.default.wordList.filter((data) => data.pos === "adjective");
const adverb = TestData_json_1.default.wordList.filter((data) => data.pos === "adverb");
const noun = TestData_json_1.default.wordList.filter((data) => data.pos === "noun");
const verb = TestData_json_1.default.wordList.filter((data) => data.pos === "verb");
app.get("/words", (_req, res) => {
    const randomData = [
        ...adverb,
        ...adjective.sort(() => 0.5 - Math.random()).slice(0, 2),
        ...noun.sort(() => 0.5 - Math.random()).slice(0, 3),
        ...verb.sort(() => 0.5 - Math.random()).slice(0, 3),
    ];
    res.send(randomData.sort(() => 0.5 - Math.random()));
});
app.post("/rank", (req, res) => {
    let scoreNum = 0;
    const score = req.body.score;
    TestData_json_1.default.scoresList.map((s) => {
        if (score > s) {
            scoreNum++;
        }
    });
    const rank = (scoreNum / 30) * 100;
    res.status(201).json(+rank.toFixed(2));
});
//# sourceMappingURL=app.js.map