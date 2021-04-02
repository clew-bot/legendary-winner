import React from "react";
import Hero from "../Hero";
import Grid from "@material-ui/core/Grid";

import Background from "../Cards/Background";
import Favorites from "../Cards/Favorites";

export default function Home() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3} lg={3}></Grid>
      <Grid item xs={12} lg={6}>
        <Hero />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item lg={1}></Grid>
      <Grid item xs={12} lg={5}>
        <Background />
      </Grid>
      <Grid item lg={5} xs={12}>
        <Favorites />
      </Grid>
      <Grid item lg={1}></Grid>
    </Grid>
  );
}
