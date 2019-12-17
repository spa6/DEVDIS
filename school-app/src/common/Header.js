import React, { Component } from "react";
import "./Header.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import { Link } from "react-router-dom";
import Typography from "../onepirate/modules/components/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
// import { withRouter } from "react-router-dom";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  grow1: {
    flexGrow: 0.6
  },
  menuLink: {
    textDecoration: "none",
    color: "white",
    paddingLeft: 10,
    marginRight: "1%",
    "&:hover": {
      color: "#007bff"
    }
  },
  menuMobileLink: {
    textDecoration: "none",
    color: "black",
    // marginRight: "1%",
    "&:hover": {
      color: "#007bff"
    }
  },
  searchIcon: {
    width: theme.spacing(4),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000"
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  avatar: {
    width: 40,
    height: 40
  },
  appHeader: {
    backgroundColor: "#263238"
  },
  hr: {
    height: "1.5px",
    backgroundColor: "#f2f2f2",
    marginLeft: "5px",
    marginRight: "5px"
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      userProfileUrl: "images/avatar/4.jpg",
      user: sessionStorage.getItem("username")
    };
  }

  render() {
    const { classes, screen } = this.props;
    const menuClasses = `${classes.grow1} menubar`;
    return (
      <div>
        <AppBar className={classes.appHeader}>
          <Toolbar>
            {/* {(screen === "Login" || screen === "Home") && <span className="header-logo">Image Viewer</span>} */}
            {/* {(screen === "Profile" || screen === "Students" || screen === "Overview") && } */}
            {/* <Link
              style={{ textDecoration: "none", color: "white", width: "25%" }}
              to="/"
            >
              <h1>VASISHTA SCHOOLS</h1>
            </Link> */}

            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <span className="header-logo">VASISHTA SCHOOLS</span>
            </Link>
            <div className={classes.grow1}></div>
            <div className={menuClasses}>
              <Link className={classes.menuLink} to="/">
                HOME
              </Link>
              <Link className={classes.menuLink} to="/about">
                ABOUT US
              </Link>
              <Link className={classes.menuLink} to="/gallery">
                GALLARY
              </Link>
              <Link className={classes.menuLink} to="/contact">
                BLOG
              </Link>
              <Link className={classes.menuLink} to="/contact">
                CAREERS
              </Link>
              <Link className={classes.menuLink} to="/contact">
                CONTACT US
              </Link>
            </div>
            <div className="mobileView">
              <IconButton onClick={this.handleClick}>
                <MenuIcon color="secondary" />
              </IconButton>
              <Popover
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
              >
                <div style={{ padding: "5px" }}>
                  <MenuItem>
                    <Link className={classes.menuMobileLink} to="/home">
                      HOME
                    </Link>
                  </MenuItem>
                  <div className={classes.hr} />
                  <MenuItem>
                    <Link className={classes.menuMobileLink} to="/about">
                      ABOUT US
                    </Link>
                  </MenuItem>
                  <div className={classes.hr} />
                  <MenuItem>
                    <Link className={classes.menuMobileLink} to="/gallery">
                      GALLARY
                    </Link>
                  </MenuItem>
                  <div className={classes.hr} />
                  <MenuItem>
                    <Link className={classes.menuMobileLink} to="/blog">
                      BLOG
                    </Link>
                  </MenuItem>
                  <div className={classes.hr} />
                  <MenuItem>
                    <Link className={classes.menuMobileLink} to="/contact">
                      CAREERS
                    </Link>
                  </MenuItem>
                  <div className={classes.hr} />
                  <MenuItem>
                    <Link className={classes.menuMobileLink} to="/contact">
                      CONTACT US
                    </Link>
                  </MenuItem>
                </div>
              </Popover>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleAccount = () => {
    this.props.history.push("/profile");
    this.handleClose();
  };

  handleStudents = () => {
    this.props.history.push("/students");
    this.handleClose();
  };

  handleSubjects = () => {
    this.props.history.push("/subjects");
    this.handleClose();
  };

  handleOverview = () => {
    this.props.history.push("/overview");
    this.handleClose();
  };

  handleLogout = () => {
    sessionStorage.clear();
    this.props.history.replace("/");
    this.handleClose();
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
}

export default withStyles(styles)(Header);
