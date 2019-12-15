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
// import { withRouter } from "react-router-dom";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  grow1: {
    flexGrow: 0.6
  },
  search: {
    position: "relative",
    borderRadius: "4px",
    backgroundColor: "#c0c0c0",
    marginLeft: 0,
    width: "300px"
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
    return (
      <div>
        <AppBar className={classes.appHeader}>
          <Toolbar>
            {/* {(screen === "Login" || screen === "Home") && <span className="header-logo">Image Viewer</span>} */}
            {/* {(screen === "Profile" || screen === "Students" || screen === "Overview") && } */}
            <Link
              style={{ textDecoration: "none", color: "white", width: "25%" }}
              to="/"
            >
              <h1>VASISHTA SCHOOLS</h1>
              
            </Link>
            <div className={classes.grow1}></div>
            <Link
              style={{ textDecoration: "none", color: "white" , marginRight:"1%"}}
              to="/about"
            >
              ABOUT US
              
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white", marginRight:"1%" }}
              to="/gallery"
            >
              GALLARY
              
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" , marginRight:"1%"}}
              to="/contact"
            >
              CONTACT US
              
            </Link>
            
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
