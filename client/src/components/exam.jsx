import React, { useState } from "react";
import questions from "../qu";

import Button from "@mui/material/Button";
export default function Questions() {
  const [index, setIndex] = useState(0);
  const [useData, setUserData] = useState({});
  const PrevQuestion = () => {
    setIndex(index - 1);
  };

  const NextQuestion = () => {
    setIndex(index + 1);
  };
  const Submit = (e) => {
    const { name, value } = e.target;
    setUserData((prevnote) => {
      return {
        ...prevnote,
        [name]: value,
      };
    });
    window.alert(useData);
  };
  const Question = (props) => {
    return (
      <div>
        <h1> {props.q} </h1>
        <label htmlFor="p1">
          {" "}
          <p>{props.p1} </p>{" "}
        </label>
        <input type="checkbox" name="p1" value={props.p1} id="p1" />
        <label htmlFor="p2">
          {" "}
          <p>{props.p2} </p>{" "}
        </label>
        <input type="checkbox" name="p2" value={props.p2} id="p2" />
        <label htmlFor="p3">
          {" "}
          <p>{props.p2} </p>{" "}
        </label>
        <input type="checkbox" name="p3" value={props.p3} id="p3" />
        <label htmlFor="p4">
          {" "}
          <p>{props.p4} </p>{" "}
        </label>
        <input type="checkbox" name="p4" value={props.p4} id="p4" />
      </div>
    );
  };
  return (
    <>
      {" "}
      <h1>3</h1>
      <form action="">
        <Question
          q={questions[index].q}
          p1={questions[index].p1}
          p2={questions[index].p2}
          p3={questions[index].p3}
          p4={questions[index].p4}
        />{" "}
        <Button onClick={Submit} variant="contained">
          Submit
        </Button>
      </form>
      <Button onClick={PrevQuestion} variant="contained">
        Previous
      </Button>
      <Button onClick={NextQuestion} variant="contained">
        Next
      </Button>
    </>
  );
}
