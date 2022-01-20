import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Questions from "./qtest";
import { useState } from "react";
export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [postiveScore, setPositiveScore] = useState(0);
  const [negativeScore, setNegativeScore] = useState(0);
  const [explaination, setExplaination] = useState("");
  const [answers, setAnswers] = useState({});
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [nextbtn, setNextBtn] = useState(true);
  const [submitbtn, setSubmitBtn] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setAnswers((prevnote) => {
      return {
        ...prevnote,
        [name]: value,
      };
    });
  }
  function onsubmit(e) {
    var ID = Questions[currentQuestion].questionID;
    var ex = Questions[currentQuestion].explaination;

    const correctAnswer = Questions[currentQuestion].CorrectAnswer;
    setNextBtn(false);
    setSubmitBtn(true);
    setCorrectAnswer(correctAnswer);
    if (answers[ID] === correctAnswer) {
      setPositiveScore(postiveScore + 4);
      setMessage("congratulations🥳🥳🥳. You got it right.");
      setExplaination(ex);
      setMessageColor({ color: "green" });
    } else {
      console.log("wrong");
      setNegativeScore(negativeScore - 1);
      setExplaination(ex);
      setMessageColor({ color: "red" });
      setMessage("Ooops! You missed it!!!");
    }

    console.log(answers);
  }
  function handleIncrease() {
    setCurrentQuestion(currentQuestion + 1);

    setExplaination("");
    setCorrectAnswer("");
    setSubmitBtn(false);
    setNextBtn(true);
    setMessage("");
  }
  return (
    <>
      {" "}
      <Button color="success" variant="contained">
        {" "}
        <p> Positive Score : {postiveScore}</p>{" "}
      </Button>
      <Button color="error" variant="contained">
        {" "}
        <p>Negative Marks : {negativeScore} </p>{" "}
      </Button>
      <Card style={{ marginTop: "100px" }} sx={{ maxWidth: "100%" }}>
        <CardContent>
          <form method="post">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                <Typography gutterBottom variant="h5" component="div">
                  {Questions[currentQuestion].question}{" "}
                </Typography>
              </FormLabel>
              <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
                <FormControlLabel
                  name={Questions[currentQuestion].questionID}
                  onChange={handleChange}
                  value={Questions[currentQuestion].Optoions[0].op1}
                  disabled={submitbtn}
                  control={<Radio color="success" />}
                  label={Questions[currentQuestion].Optoions[0].op1}
                />
                <FormControlLabel
                  name={Questions[currentQuestion].questionID}
                  onChange={handleChange}
                  value={Questions[currentQuestion].Optoions[0].op2}
                  disabled={submitbtn}
                  control={<Radio color="success" />}
                  label={Questions[currentQuestion].Optoions[0].op2}
                />
                <FormControlLabel
                  name={Questions[currentQuestion].questionID}
                  onChange={handleChange}
                  value={Questions[currentQuestion].Optoions[0].op3}
                  disabled={submitbtn}
                  control={<Radio color="success" />}
                  label={Questions[currentQuestion].Optoions[0].op3}
                />
                <FormControlLabel
                  name={Questions[currentQuestion].questionID}
                  onChange={handleChange}
                  value={Questions[currentQuestion].Optoions[0].op4}
                  disabled={submitbtn}
                  control={<Radio color="success" />}
                  label={Questions[currentQuestion].Optoions[0].op4}
                />
              </RadioGroup>
            </FormControl>
          </form>
        </CardContent>
        <CardActions>
          <Button
            onClick={handleIncrease}
            disabled={nextbtn}
            variant="contained"
            fullWidth="true"
            color="success"
          >
            {" "}
            Next
          </Button>
          <Button
            variant="contained"
            color="success"
            fullWidth="true"
            disabled={submitbtn}
            onClick={onsubmit}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
      <div style={{ width: "100%", height: "200px" }}>
        <h2 style={messageColor}>{message}</h2>
        <h3>Correct Answer: {correctAnswer} </h3>
        <p> {explaination} </p>
      </div>
    </>
  );
}
