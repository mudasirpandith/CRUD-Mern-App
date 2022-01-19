import React from "react";
import BasicCard from "./subjectcard";
import CustomDrawer from "../drawer";
import subjects from "./psubject";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Physics() {
  return (
    <>
      <CustomDrawer />
      <h1>#</h1>
      <h1>Physics</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {" "}
          {subjects.map((subject) => {
            return (
              <Grid item xs={12} xl={4}>
                <Item>
                  <BasicCard topic={subject.topic} link={subject.link} />
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
