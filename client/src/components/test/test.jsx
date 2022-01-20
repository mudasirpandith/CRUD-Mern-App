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
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Questions from "./qtest";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Test() {
  const navigate = useNavigate();
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
  const [exitBtn, setExitBtn] = useState(true);
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
    if (currentQuestion === Questions.length - 1) {
      setNextBtn(true);
      setExitBtn(false);
    }
    if (answers[ID] === correctAnswer) {
      setPositiveScore(postiveScore + 4);
      setMessage("congratulations🥳🥳🥳. You got it right.");
      setExplaination(ex);
      setMessageColor({ color: "green" });
    } else {
      setNegativeScore(negativeScore - 1);
      setExplaination(ex);
      setMessageColor({ color: "red" });
      setMessage("Ooops! You missed it!!!");
    }
  }
  function handleIncrease() {
    setCurrentQuestion(currentQuestion + 1);

    setExplaination("");
    setCorrectAnswer("");
    setSubmitBtn(false);
    setNextBtn(true);
    setMessage("");

    if (currentQuestion === Questions.length - 1) {
      setNextBtn(true);
      setExitBtn(false);
    }
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              {" "}
              <p> Correct Marks : {postiveScore}</p>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <p>Negative Marks : {negativeScore} </p>
            </Item>
          </Grid>
        </Grid>{" "}
      </Box>{" "}
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
            fullWidth={true}
            color="success"
          >
            {" "}
            Next
          </Button>
          <Button
            variant="contained"
            color="success"
            fullWidth={true}
            disabled={submitbtn}
            onClick={onsubmit}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
      <Card style={{ marginTop: "20px" }}>
        <Button
          style={{ position: "absolute", right: "20px" }}
          disabled={exitBtn}
          variant="contained"
          color="success"
          size="small"
          onClick={() => {
            navigate(
              "/subjects/fullslybuss/biology/hefiufdnfiueqhfui3ededjreihfhbiu43hrfbui3reiudhfuh4389rueekjdnreuifhri"
            );
          }}
        >
          Exit
        </Button>
        <div style={{ width: "100%" }}>
          <h2 style={messageColor}>{message}</h2>
          <h3>Correct Answer: {correctAnswer} </h3>
          <p> {explaination} </p>
        </div>
      </Card>
    </>
  );
}
