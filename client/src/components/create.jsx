import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export default function Create() {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    address: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function handleChange(e) {
    const { name, value } = e.target;
    return setForm((prev) => {
      return { ...prev, [name]: value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    const res = await fetch("/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 400) {
      setMessage(data);
    } else {
      window.alert("User Added");
      setForm({ username: "", phoneNumber: "", email: "", address: "" });
      navigate("/");
    }
  }

  return (
    <div>
      <h3>Add Details</h3>
      <center>
        <p style={{ color: "red" }}> {message} </p>
      </center>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Only alphanumeric allowed"
            id="username"
            pattern="[a-zA-Z0-9]+"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phonenumber"
            name="phoneNumber"
            maxLength={10}
            value={form.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>{" "}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
