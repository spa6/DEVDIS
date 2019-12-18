import withRoot from "../withRoot";
// --- Post bootstrap -----
import React from "react";
import AppFooter from "./AppFooter";
import Header from "../../../common/Header";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
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
    paddingBottom: theme.spacing(40)
  }
}));
function ClassRooms() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <Header screen={"Website"} />
      <div className="container"></div>
      <br /> <br /> <br />
      <Container>
        <Grid container spacing={3}>
          <div className="container"></div>
          <Grid item xs={6} sm={1}>
            <Avatar
              alt="Remy Sharp"
              src="/images/classroom/classroom_2.PNG"
              className={classes.large}
            />
          </Grid>
          <Grid item xs={6} sm={5}>
            <Typography variant="caption">
              Our Campus is spready across a sprawling area of 10 acres which
              houses top class Infrastructure facilities never heard of before….
            </Typography>
          </Grid>
          <Grid item xs={6} sm={1}>
            <Avatar
              alt="Remy Sharp"
              src="/images/classroom/learning.PNG"
              className={classes.large}
            />
          </Grid>
          <Grid item xs={6} sm={5}>
            <Typography variant="caption">
              Each Classrooms are equipped with air-conditioners providing that
              perfect setting that fosters learning.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}></Grid>
          <Grid item xs={6} sm={1}>
            <Avatar
              alt="Remy Sharp"
              src="/images/classroom/wifi.PNG"
              className={classes.large}
            />
          </Grid>
          <Grid item xs={6} sm={5}>
            <Typography variant="caption">
              Ergonomically designed high tech classrooms equipped with
              sophisticated teaching equipments like Projectors, Wi-Fi etc.
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.belowPadding}></div>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(ClassRooms);
