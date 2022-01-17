import React, { useEffect, useState } from "react";
import CustomGrid from "./grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  async function getData() {
    try {
      const res = await fetch("/home", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (!res.status === 200) {
        const error = new Error(res.error);
        navigate("/login");
      }
      setUserData(data);
      console.log(data.email);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  }

  useEffect(() => {
    getData();
  });
  async function handleLogOut() {
    const res = fetch("/logout", {
      method: "Post",
    });
    if (res.status === 200) {
      navigate("/login");
    }
  }

  return (
    <>
      {" "}
      <form method="get">
        <h2>d</h2>
        <h2>{userData.name}</h2>
        <h3>{userData.email} </h3>
        <h3>{userData.phoneNumber} </h3>

        <CustomGrid />
      </form>
      <Button variant="contained" onClick={handleLogOut} type="submit">
        Logout
      </Button>
    </>
  );
}
