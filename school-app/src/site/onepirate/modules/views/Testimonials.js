import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ImageScrole from "../components/imagescrole/ImageScrole";
import "./Testimonials.css";

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    overflow: "hidden"
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10)
    }
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  title: {
    marginBottom: theme.spacing(14)
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7
  },
  button: {
    marginTop: theme.spacing(8)
  }
});

function Testimonials(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4" marked="center" component="h6">
          Testimonials
        </Typography>
        <div>
          <ImageScrole />
        </div>
      </Container>
    </section>
  );
}

Testimonials.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Testimonials);
