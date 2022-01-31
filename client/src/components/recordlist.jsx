import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Create from "./create";
const Record = (props) => (
  <tr>
    <td>{props.record.username}</td>
    <td>{props.record.phoneNumber}</td>
    <td>{props.record.email}</td> <td>{props.record.address}</td>
    <td>
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  // This method fetches the records from the database.

  useEffect(() => {
    async function getRecords() {
      try {
        const res = await fetch(`/record`, {
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
        setRecords(data);
      } catch (err) {
        console.log(err);

        navigate("/login");
      }
    }
    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`/${id}`, {
      method: "POST",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records
      .slice()
      .reverse()

      .map((record) => {
        return (
          <Record
            record={record}
            deleteRecord={() => deleteRecord(record._id)}
            key={record._id}
          />
        );
      });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="All Record" value="1" />
              <Tab label="Add new" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <form method="GET">
              <h3> List</h3>
            </form>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Phone number</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>{recordList()}</tbody>
            </table>
          </TabPanel>
          <TabPanel value="2">
            <Create />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
