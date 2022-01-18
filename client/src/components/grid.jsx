import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MultiActionAreaCard from "./card";
export default function CustomGrid() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Item>
              {" "}
              <MultiActionAreaCard />{" "}
            </Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item>
              <MultiActionAreaCard />
            </Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item>
              <MultiActionAreaCard />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
