import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(1),
    },
  },
}));
export default function Favorites() {
  return (
    <Paper elevation={3} style={{ marginTop: "90px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Personal</h1>

      <h4>Hometown : Orange County CA</h4>
      <h4>
        Schools Attended: Cypress College, University of California Irvine
      </h4>

      <h4>Pets: 1 Dog Mochi, 1 Bird Cleo, 1 Fish Pedro, as of 3/31/21</h4>
      <h4>Favorite Dish: Some good Gyoza</h4>
      <h4>Favorite TV show: Cobra Kai</h4>
      <h4>
        Favorite Type of Music:{" "}
        <code>if (coding) playKpop() else playAll();</code>
      </h4>
      <h4>Favorite Item to collect: Yugioh/Pokemon Cards</h4>
      <h4>
        Favorite Joke: Which bar did the programmer go too? ....The Foo Bar
      </h4>
      <h4>Favorite Book: Steve Jobs by Walter Isaacson</h4>
      <h4>
        Inspirations: Mom, Dad, Jeff Dean, Mark Zuckerberg, Jeff Bezos, Marc
        Randolph, Dax Shepard{" "}
      </h4>
      <h4>iPhone or Android: iPhone</h4>
      <h4>Favorite Language: Javascript</h4>
      <h4>Favorite what? Are you still reading this?</h4>
    </Paper>
  );
}
