import withRoot from "../withRoot";
// --- Post bootstrap -----
import React from "react";
import AppFooter from "./AppFooter";
import Header from "../../../common/Header";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "../components/Typography";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  belowPadding: {
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(40)
    }
  }
}));
function RoboticsLab() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <Header screen={"Website"} />
      <div className="container"></div>
      <br /> <br /> <br />
      <Container>
        <Grid alignItems="center" container spacing={3}>
          <Grid item xs={3} sm={1}>
            <Avatar
              alt="lab 2"
              src="/images/roboticslab/lab.PNG"
              className={classes.large}
            />
          </Grid>
          <Grid item xs={8} sm={5}>
            <Typography variant="caption">
              With Ai and ML poised to be the next big thing in the years to
              come, at Vasistha College we are aggressively investing in the New
              upcoming technologies in every way possible for students to
              familiarize themselves and try new things, that can possibly
              redefine the way we Live In.
            </Typography>
          </Grid>
          <Grid item xs={3} sm={1}>
            <Avatar
              alt="lab"
              src="/images/roboticslab/lab2.PNG"
              className={classes.large}
            />
          </Grid>
          <Grid item xs={8} sm={5}>
            <Typography variant="caption">
              Our Lab features Robotic equipments, Sensors and other electronic
              simulation environments that will give Students a Virtual World of
              Artificial Intelligence.
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.belowPadding}></div>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(RoboticsLab);
