import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

const styles = theme => ({
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
});

function CompanyIntro(props) {
  const { classes } = props;

  return (
    <div>
      <br></br>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <img
              src={window.location.origin + "/images/campus/CompanyLogo.jpg"}
              width="100%"
              // alt={this.state.selectedPost.caption.text.split("\n")[0]}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid
              container
              spacing={3}
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6">ABOUT US</Typography>
              </Grid>
            </Grid>
            <Divider light />
            <Grid
              container
              spacing={2}
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="body2">
                  <b>DEVDIS</b>  Rise a simple yet powerful word that defines ‘DEVDIS’ and gives the Brand, a meaning and purpose.
                  It instills an ambition and attitude that ‘we can achieve whatever we set our minds to’ and declares who we are,
                  how we operate, what we believe in and where we want to be. In tune with this philosophy,
                  we bring you handpicked stories of excellence at DEVDIS across all-India locations.
                </Typography>
                <br />
                <Typography variant="body2">
                  A global leader in consulting, technology services and digital transformation,
                  DEVDIS is at the forefront of innovation to address the entire breadth of clients’ opportunities
                  in the evolving world of cloud, digital and platforms.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="body2">
              At DEVDIS, we believe in Overall Wellbeing, from Mental to
              Physical wellness, hence provide all kinds of facilities to our
              Employees to prosper and Lead the next generation.
              <br></br>We aim to provide World Class Infrastructure Facilities
              to our Employees while imparting knowledge with dexterity to
              achieve success in all walks of life.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

CompanyIntro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompanyIntro);
