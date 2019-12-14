import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

const backgroundImage =
  'school.PNG';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function SchoolIntro(props) {
  const { classes } = props;

  return (
    <div>
<div className="container"></div>
<br></br>
      <Container>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <img
                src="images/campus/campus.jpg"
                width="100%"
                // alt={this.state.selectedPost.caption.text.split("\n")[0]}
              />
            </Grid>
            <Grid item xs={6}>
              <Grid
                container
                spacing={3}
                justify="flex-start"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="subtitle2" >ABOUT US</Typography>
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
                  <h4>Dedicated Educators</h4>
                  <Typography variant="caption">
                    We know that learning is easier when you have an excellent teacher. That's why most of educators have achieved advanced degree in their field. Our facility are passinate about the subjects they teach and bring enthusiasam to their lessons.
                  </Typography>
                  <h4>First-Rate Curriculum</h4>
                  <Typography variant="caption">
                     Are you a beginner, expert or some where in between? Not to worry! we offer a variety of high profile cources desingned to prepare you for next step.
                  </Typography>
                  <h4>Commitment to Excellence</h4>
                  <Typography variant="caption">
                     Our mission is to embrace the persuit of excellence both inside and outside the classroom. We encourage critical thinking and emphasize the learning process over rote memorization.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
    </div>
  );
}

SchoolIntro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SchoolIntro);
