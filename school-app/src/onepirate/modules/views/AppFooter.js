import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://material-ui.com/">
        Vasista schools
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex"
  },
  iconsWrapper: {
    height: 120
  },
  icons: {
    display: "flex"
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark
    }
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150
  }
}));

const LANGUAGES = [
  {
    code: "en-US",
    name: "English"
  },
  {
    code: "fr-FR",
    name: "Français"
  }
];

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4}>
            <Grid
              container
              direction="row"
              // justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="https://www.facebook.com/" className={classes.icon}>
                  <img
                    src={
                      window.location.origin +
                      "/static/themes/onepirate/appFooterFacebook.png"
                    }
                    alt="Facebook"
                  />
                </a>
                <a href="https://twitter.com/" className={classes.icon}>
                  <img
                    src={
                      window.location.origin +
                      "/static/themes/onepirate/appFooterTwitter.png"
                    }
                    alt="Twitter"
                  />
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/">Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/">Privacy</Link>
              </li>
            </ul>
          </Grid>
          {/* <Grid item xs={4} sm={6} md={2}></Grid> */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Contact Us
            </Typography>
            <Grid
              container
              spacing={2}
              justify="flex-start"
              alignItems="center"
            >
              <Grid xs={2} sm={1} item>
                <HomeIcon />
              </Grid>
              <Grid xs={10} item>
                <Typography variant="caption">
                  Vasista schools, xz road, abc nagar, Ballary , Karnataka.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justify="flex-start"
              alignItems="center"
            >
              <Grid xs={2} sm={1} item>
                <MailIcon />
              </Grid>
              <Grid xs={10} item>
                <Typography variant="caption">info@vasista.com</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justify="flex-start"
              alignItems="center"
            >
              <Grid xs={2} sm={1} item>
                <MailIcon />
              </Grid>
              <Grid xs={10} item>
                <Typography variant="caption">contact@vasista.com</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justify="flex-start"
              alignItems="center"
            >
              <Grid sm={1} xs={2} item>
                <PhoneIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">Admission Desk</Typography>
                <Typography variant="caption">080 - 1234567896</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
