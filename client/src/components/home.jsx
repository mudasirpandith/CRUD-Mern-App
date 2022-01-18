import React, { useEffect, useState } from "react";
import CustomGrid from "./grid";
import { useNavigate } from "react-router-dom";
import CustomDrawer from "./drawer";
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
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  }

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      getData();
      return () => {
        isActive = false;
      };
    }
  }, []);

  return (
    <>
      {" "}
      <CustomDrawer name={userData.name} email={userData.email} />
      <form method="get">
        <CustomGrid />
      </form>
    </>
  );
}
