import React from "react";
import Hero from "../Hero";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../Cards/Background";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Hero />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <Background />
      </Grid>
      <Grid item xs={4}>
        dsds
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
