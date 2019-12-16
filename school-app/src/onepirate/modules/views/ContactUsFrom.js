import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";

const styles = theme => ({
  col: {
    width: "10%"
  }
});
function FormPage(props) {
  const { classes } = props;
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <MDBContainer>
            <MDBRow>
              <MDBCol />
              <MDBCol>
                <form>
                  <p className="h5 text-center mb-4">Get In Touch!</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Subject"
                      icon="tag"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      type="textarea"
                      rows="2"
                      label="Your message"
                      icon="pencil-alt"
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn outline color="secondary">
                      Send <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Grid>
        <Grid item xs={6}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Grid container spacing={3} justify="flex-start" alignItems="center">
            <Grid item>
              <Typography
                color="inherit"
                align="center"
                variant="subtitle2"
                marked="center"
              >
                Reach Us!
              </Typography>
            </Grid>
          </Grid>
          <Divider light />
          <Grid container spacing={2} justify="flex-start" alignItems="center">
            <Grid xs={1} item>
              <HomeIcon />
            </Grid>
            <Grid xs={5} item>
              <Typography variant="caption">
                Vasista schools, xz road, abc nagar, Ballary , Karnataka.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="flex-start" alignItems="center">
            <Grid xs={1} item>
              <MailIcon />
            </Grid>
            <Grid xs={5} item>
              <Typography variant="caption">info@vasista.com</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="flex-start" alignItems="center">
            <Grid xs={1} item>
              <MailIcon />
            </Grid>
            <Grid xs={5} item>
              <Typography variant="caption">contact@vasista.com</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="flex-start" alignItems="center">
            <Grid item>
              <Typography variant="body1">Admission Desk</Typography>
              <Typography variant="caption">080 - 1234567896</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(FormPage);
