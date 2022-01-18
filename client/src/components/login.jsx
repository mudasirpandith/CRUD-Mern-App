import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function Register() {
  const [userData, setUserData] = useState({});
  const [message, setMessage] = useState("");
  const [submitText, setSubbmitText] = useState("Log In");
  const navigate = useNavigate();

  function updateForm(value) {
    return setUserData((prev) => {
      return { ...prev, ...value };
    });
  }
  const newPerson = { ...userData };
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...userData };

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    });
    const data = await res.json();
    if (res.status === 400) {
      setMessage(data.message);
      setSubbmitText("Log In");
    } else {
      setMessage(data.message);
      navigate("/");
    }
    console.log(data.email);
  }
  function handleSubmitText() {
    setSubbmitText(" Logging In ...");
  }
  return (
    <>
      {" "}
      <center>
        <div className="register-box">
          <h2>Log In </h2>
          <p className="message">{message}</p>
          <Box
            onSubmit={onSubmit}
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
          >
            {" "}
            <TextField
              id="outlined-basic"
              type="email"
              name="email"
              id="email"
              onChange={(e) => updateForm({ email: e.target.value })}
              value={userData.email}
              label="Email"
              variant="outlined"
            />{" "}
            <br />
            <TextField
              id="outlined-basic"
              type="password"
              name="password"
              id="password"
              onChange={(e) => updateForm({ password: e.target.value })}
              value={userData.value}
              label="Password"
              variant="outlined"
            />{" "}
            <br />
            <Button
              variant="contained"
              onClick={handleSubmitText}
              type="submit"
            >
              {submitText}
            </Button>
          </Box>{" "}
          <NavLink className="nav-link" to="/register">
            New User?
          </NavLink>
        </div>
      </center>
    </>
  );
}
