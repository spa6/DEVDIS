import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import UploadYourDetails from "../components/UploadYourDetails";
import ProductHeroLayout from "./ProductHeroLayout";


const backgroundImage = "CompanyLogo.PNG";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: theme.palette.common.black, // Average color of the background image.
    backgroundPosition: "center",
    [theme.breakpoints.up("sm")]: {
      backgroundImage: "none"
    }
  },
  button: {
    minWidth: 200,
    borderRadius: 30
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

class CompanyServices extends Component {
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
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Where Passion Meets Everything
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          className={classes.h5}
        >
          Building a community of life long careers!
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          onClick={this.openLoginModalHandler}
        >
          SEND YOUR DETAILS
        </Button>
        <UploadYourDetails
          modalIsOpen={modalIsOpen}
          closeLoginModalHandler={this.closeLoginModalHandler}
        />
      </ProductHeroLayout>
    );
  }
}

CompanyServices.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompanyServices);
