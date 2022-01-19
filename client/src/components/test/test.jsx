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
  const [anwers, setAnswers] = useState({});
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
    console.log(anwers);
  }
  function handleDecrease() {
    setCurrentQuestion(currentQuestion - 1);
  }
  function handleIncrease() {
    setCurrentQuestion(currentQuestion + 1);
  }
  return (
    <>
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
                  control={<Radio color="success" />}
                  label={Questions[currentQuestion].Optoions[0].op1}
                />
                <FormControlLabel
                  name={Questions[currentQuestion].questionID}
                  onChange={handleChange}
                  value={Questions[currentQuestion].Optoions[0].op2}
                  control={<Radio color="success" />}
                  label={Questions[currentQuestion].Optoions[0].op2}
                />
                <FormControlLabel
                  name={Questions[currentQuestion].questionID}
                  onChange={handleChange}
                  value={Questions[currentQuestion].Optoions[0].op3}
                  control={<Radio color="success" />}
                  label={Questions[currentQuestion].Optoions[0].op3}
                />
                <FormControlLabel
                  name={Questions[currentQuestion].questionID}
                  onChange={handleChange}
                  value={Questions[currentQuestion].Optoions[0].op4}
                  control={<Radio color="success" />}
                  label={Questions[currentQuestion].Optoions[0].op4}
                />
              </RadioGroup>
            </FormControl>
            <Button
              style={{ position: "absolute", right: "20px" }}
              variant="contained"
              onClick={onsubmit}
            >
              Submit
            </Button>
          </form>
        </CardContent>
        <CardActions>
          <Button onClick={handleDecrease} variant="contained">
            {" "}
            Prev
          </Button>

          <Button onClick={handleIncrease} variant="contained">
            {" "}
            Next
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
