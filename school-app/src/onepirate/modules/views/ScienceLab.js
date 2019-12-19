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
function ScienceLab() {
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
              alt="Experiment’"
              src="/images/sciencelab/experiemt.PNG"
              className={classes.large}
            />
          </Grid>
          <Grid item xs={8} sm={5}>
            <Typography variant="caption">
              Our Science Lab offers all kinds of equipments that aid in
              Student’s learning and inquisitiveness to ‘try-n-experiment’
              various prototypes which will help them in ‘fail-to-succeed”
              approach.
            </Typography>
          </Grid>
          <Grid item xs={3} sm={1}>
            <Avatar
              alt="Machinery"
              src="/images/sciencelab/machinary.PNG"
              className={classes.large}
            />
          </Grid>
          <Grid item xs={8} sm={5}>
            <Typography variant="caption">
              We offer latest Imported machinery and infrastructure for
              students, thus transforming them into the ‘Next Einstein’.
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.belowPadding}></div>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(ScienceLab);
