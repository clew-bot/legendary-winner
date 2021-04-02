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

export default function Hero() {
  const classes = useStyles();
  return (
    <div className="hero-container">
      {/* <img
        src="/assets/images/nature.png"
        alt="sourcing"
        className="natureImg"
      /> */}
      <Paper elevation={3} style={{ marginTop: "30px" }}>
        <br />
        <h3 style={{ textAlign: "center" }}>Who is Chad Lew?</h3>
        <div style={{ padding: "50px" }}>
          <p>
            I'm a hardworking, fun, caring guy that loves to code and read
            books. I'm a Jr. Software Developer, and I like to deliver quality
            content across all platforms. While I'm 25 years old, my passion for
            coding is fueled by my background in Sociology, always wondering how
            everything works and to never stop exploring. I have a background in
            Sociology at Cypress College completing an AA-T degree. After that,
            I recently graduated at University of California Irvine for Full
            Stack Web Development Coding Bootcamp. My main focus is coding full
            stack applications and trying to land a job to get my feet wet and
            eventually work for a company that contributes to the world in a
            positive way.
          </p>
        </div>
      </Paper>
    </div>
  );
}
