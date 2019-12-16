import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";

const styles = theme => ({
  root: {
    // display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  head: {
    // display: "flex",
    marginTop: theme.spacing(7)
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <div className={classes.head}>
        <Typography variant="h4" marked="center" align="center" component="h2">
          Achivements
        </Typography>
      </div>
      <Container className={classes.container}>
        <img
          src={
            window.location.origin +
            "/static/themes/onepirate/productCurvyLines.png"
          }
          className={classes.curvyLines}
          alt="curvy lines"
        />

        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src="trophy.png" alt="suitcase" />
              <Typography variant="h6" className={classes.title}>
                Most Promising School Of The Year 2017
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src="trophy.png" alt="graph" />
              <Typography variant="h6" className={classes.title}>
                Best Emerging Educational Institution & Best Institution For
                Infrastructure
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src="trophy.png" alt="clock" />
              <Typography variant="h6" className={classes.title}>
                International School Award Accreditation 2018-21
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
