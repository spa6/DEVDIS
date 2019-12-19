import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

const backgroundImage = "school.PNG";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200
  },
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

function SchoolIntro(props) {
  const { classes } = props;

  return (
    <div>
      <br></br>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <img
              src={window.location.origin + "/images/campus/campus.jpg"}
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
                  <b>Vasistha</b> literally means, “best” or “most prosperous”
                  according to Sanskrit, an Ancient and oldest language in
                  Hinduism known to Mankind. It symbolizes the zeal to Excel in
                  all walks of life through ‘Constant Knowledge’ and ‘Sincerity
                  and Faith’ in Oneself. With a Vision to shape the future
                  generations with Knowledge and instilling Confidence, Truth
                  and Honesty as our very foundation, Vasistha College is the
                  ‘Temple of Learning’ for shaping tomorrow’s generations.
                </Typography>
                <br />
                <Typography variant="body2">
                  Our Founders bring in years of Educational Excellence coupled
                  with State-of-the-Art Infrastructure Facilities, well equipped
                  labs, and faculty members who are eminent personalities with a
                  quality experience. Our campus comprises of a library, hostel,
                  canteen and dedicated area for sports, as we understand that
                  physical and spiritual fitness is the key to one’s Well being.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="body2">
              At Vasistha, we believe in Overall Wellbeing, from Mental to
              Physical wellness, hence provide all kinds of facilities to our
              Students to prosper and Lead the next generation.
              <br></br>We aim to provide World Class Infrastructure Facilities
              to our Students while imparting knowledge with dexterity to
              achieve success in all walks of life.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

SchoolIntro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SchoolIntro);
