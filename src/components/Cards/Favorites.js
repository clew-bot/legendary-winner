import React from "react";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    backgroundColor: "#e6e1e1",
    
  },
});
export default function Favorites() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Paper elevation={3} style={{ marginTop: "90px" }}>
      <br />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Personal Life</h1>
      <div style={{ padding: "30px", lineHeight: "1.6" }}>
        <p>
          <span style={{ fontWeight: "bold" }}>Hometown :</span> Orange County
          CA
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Schools Attended:</span> Cypress
          College, University of California Irvine
        </p>

        <p>
          <span style={{ fontWeight: "bold" }}>Pets:</span> 1 Dog Mochi, 1 Bird
          Cleo, 1 Fish Pedro, as of 3/31/21
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Favorite Dish:</span> Some good
          Gyoza
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Favorite TV show:</span> Cobra
          Kai
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Favorite Type of Music:</span>
          <code> if (coding) playKpop() && playLoFi() else playAll();</code>
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Favorite Item to collect:</span>{" "}
          Yugioh/Pokemon Cards
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Favorite Joke:</span> Which bar
          did the programmer go too? ....The Foo Bar
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Favorite Book:</span> Steve Jobs
          by Walter Isaacson
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Inspirations:</span> Mom, Dad,
          Jeff Dean, Mark Zuckerberg, Jeff Bezos, Marc Randolph, Dax Shepard{" "}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>iPhone or Android:</span> iPhone
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Favorite Game:</span> Pokemon
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Favorite Language:</span>{" "}
          Javascript
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Favorite what?</span> Are you
          still reading this?
        </p>
      </div>
    </Paper>
    </div>
  );
}
