import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import Admission from "../components/Admission";
import ProductHeroLayout from "./ProductHeroLayout";

import TextField from "@material-ui/core/TextField";
import "./Common.css";

const backgroundImage = "subscribers-1.jpg";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200,
    borderRadius: 30,
    marginLeft: 28
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

class MailSubscriptions extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }
  closeLoginModalHandler = () => {
    this.setState({ modalIsOpen: false });
  };
  openLoginModalHandler = () => {
    this.setState({
      modalIsOpen: true
    });
  };

  render() {
    const { classes } = this.props;
    const { modalIsOpen } = this.state;

    return (
      <ProductHeroLayout backgroundClassName={classes.background}>
        {/* Increase the network loading priority of the background image. */}
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt="increase priority"
        />
        {/* <Typography color="inherit" align="center" variant="h5" marked="center">
          Where Passion Meets Education
        </Typography> */}
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          className={classes.h5}
        >
          BE THE FIRST TO HEAR ABOUT UPCOMING CLASSES, SPECIFIC EVENTS AND
          COURSE REGISTRATIONS.
        </Typography>
        <div>
          <TextField
            style={{ width: 400, color: "white" }}
            variant="outlined"
            align="right"
            autoComplete="false"
            required
            placeholder="Your email"
          />
          <Button
            color="secondary"
            variant="contained"
            size="large"
            className={classes.button}
            component="a"
            onClick={this.openLoginModalHandler}
          >
            SUBSCIBE
          </Button>
        </div>
      </ProductHeroLayout>
    );
  }
}

MailSubscriptions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MailSubscriptions);
