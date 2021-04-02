import React from "react";
import Grid from "@material-ui/core/Grid";
import Kidtasticv2DetailCard from "../Cards/Kidtasticv2DetailCard";
import NewKidtasicDetailCard from "../Cards/NewKidtasticDetailCard";
import BudgetTrackerCard from "../Cards/BudgetTrackerCard";
import ClewbotDexCard from "../Cards/ClewbotDexCard";
import ReactReadingListCard from "../Cards/ReactReadingListCard";
import FitnessTracker from "../Cards/FitnessTracker";
import NutriSpot from "../Cards/NutriSpot";
import Techblog from "../Cards/TechBlog";

export default function Projects() {
  return (
    <div>
      <h1 className="firsth1">
        👇 My code projects. Open Source and coded with 💚 👇
      </h1>
      <Grid container spacing={3}>
        <Grid item xs={12}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={12} lg={4}>
          <NewKidtasicDetailCard />
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Kidtasticv2DetailCard />
        </Grid>
        <Grid item xs={2}></Grid>
        {/* BREAK */}
        <Grid item xs={12}></Grid>

        {/* BREAK */}
        <Grid item xs={12}></Grid>
        <Grid item xs={2} lg={2}></Grid>
        <Grid item xs={12} md={12} lg={4}>
          <BudgetTrackerCard />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ClewbotDexCard />
        </Grid>
        <Grid item xs={2}></Grid>
        {/* BREAK */}
        <Grid item xs={12}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={12} lg={4}>
          <ReactReadingListCard />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FitnessTracker />
        </Grid>
        <Grid item xs={2}></Grid>
        {/* BREAK */}
        <Grid item xs={12}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={12} lg={4}>
          <NutriSpot />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Techblog />
        </Grid>
        <Grid item xs={2}></Grid>
        {/* BREAK */}
        <Grid item xs={12}></Grid>
        <Grid item xs={2}></Grid>
        {/* <Grid item xs={12}>
        <h1>Insert Nutri Spot picture here</h1>
      </Grid>
      <Grid item xs={12}>
        <h1>Nutri Spot Details</h1>
      </Grid>
      <Grid item xs={2}></Grid> */}
      </Grid>
    </div>
  );
}
