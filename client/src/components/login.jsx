import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    return setForm((prev) => {
      return { ...prev, [name]: value };
    });
  }
  async function onsubmit(e) {
    e.preventDefault();
    const res = await fetch("/userlogin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.status === 200) {
      window.alert("user logged in succesfully");
      navigate("/");
    } else {
      window.alert(data.message);
    }
  }

  return (
    <>
      Login
      <form onSubmit={onsubmit} method="post">
        <input
          className="form-control"
          type="text"
          name="email"
          value={form.email}
          id="email"
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="password"
          name="password"
          value={form.password}
          id="password"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
