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
export default function Background() {
  const classes = useStyles();
  return (
    <Paper elevation={3} style={{ marginTop: "90px" }}>
      <br />
      <h1 style={{ textAlign: "center" }}>My Story (summed up)</h1>
      <p style={{ padding: "50px" }}>
        Out of college I had gotten my AA-T for sociology from Cypress. Upon
        getting the degree I had a strange feeling that it wouldn't pan out as I
        wanted too. Reason being is because it hit me hard that I did not want
        to be a sociologist anymore. My passion for Sociology came from huge
        curiosity into different cultures and how they operate. It was more of a
        hobbyist type of knowledge for me. I wanted to create stuff, meaningful
        programs and software that I've yearned for all my life as a kid to this
        day. I knew software development was the perfect choice because besides
        from sociology, I've always been at the computer either playing games or
        using Photoshop CS3. At the age of 22 I had a baby girl named Lela and
        she is to this day the hot coals that's running this train. I studied
        hard in HTML and CSS, eventually moving onto Javascript. I eventually
        enrolled in the UCI Coding Bootcamp and completely altered my life
        course. Everyday is a new story to be created, some new code pushed up
        to github, a new technology read on Medium, finding a new algorithm that
        will enhance workflow. These are things I would have never even dreamed
        to think about just one year ago. While I am still at my regular job
        since 2018 (not coding related) I am striving to find and seek a coding
        job to officially start the career switch. After all, it's not about the
        destination, it's about the journey.
      </p>
    </Paper>
  );
}
