import React, { Component } from "react";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./home/Home";
import Students from "./students/Students";
import Overview from "./overview/Overview";
import Messages from "./messages/Messages";
import Attendence from "./attendence/Attendence";
import SAttendence from "./studentattendence/SAttendence";
import Subjects from "./subjects/Subjects";
import Home from "../onepirate/Home";
import GallaryHome from "../onepirate/GallaryHome";
import About from "../onepirate/modules/views/About";
import Contact from "../onepirate/modules/views/Contactus";
import ClassRooms from "../onepirate/modules/views/ClassRooms";
import ScienceLab from "../onepirate/modules/views/ScienceLab";
import RoboticsLab from "../onepirate/modules/views/RoboticsLab";
import GalleryHome from "../onepirate/GalleryHome";
import FacultyHome from "../onepirate/FacultyHome";
// import App from "../admin/App";

class Controller extends Component {
  constructor(props) {
    super(props);
    this.baseUrl = "https://api.instagram.com/v1/";
    this.state = {
      loggedIn: sessionStorage.getItem("access-token") == null ? false : true
    };
  }

  render() {
    return (
      <Router>
        <div className="main-container">
          {/* <Switch> */}
          {/* <Route
              exact
              path="/home"
              render={props =>
                sessionStorage.getItem("access-token") === null ? (
                  <Login {...props} baseUrl={this.baseUrl} />
                ) : (
                  <Home />
                )
              }
            /> */}
          {/* <Route
              exact
              path="/profile"
              render={props =>
                sessionStorage.getItem("access-token") === null ? (
                  <Login {...props} baseUrl={this.baseUrl} />
                ) : (
                  <Profile />
                )
              }
            /> */}
          {/* <Route
              exact
              path="/students"
              render={props =>
                sessionStorage.getItem("access-token") === null ? (
                  <Login {...props} baseUrl={this.baseUrl} />
                ) : (
                  <Students />
                )
              }
            /> */}
          {/* <Route
              exact
              path="/overview"
              render={props =>
                sessionStorage.getItem("access-token") === null ? (
                  <Login {...props} baseUrl={this.baseUrl} />
                ) : (
                  <Overview />
                )
              }
            /> */}
          {/* <Route
              exact
              path="/attendence"
              render={props =>
                sessionStorage.getItem("access-token") === null ? (
                  <Login {...props} baseUrl={this.baseUrl} />
                ) : (
                  <Attendence />
                )
              }
            /> */}
          {/* <Route
              exact
              path="/sattendence"
              render={props =>
                sessionStorage.getItem("access-token") === null ? (
                  <Login {...props} baseUrl={this.baseUrl} />
                ) : (
                  <SAttendence />
                )
              }
            /> */}
          {/* <Route
              exact
              path="/subjects"
              render={props =>
                sessionStorage.getItem("access-token") === null ? (
                  <Login {...props} baseUrl={this.baseUrl} />
                ) : (
                  <Subjects />
                )
              }
            /> */}
          {/* <Route
              exact
              path="/messages"
              render={props =>
                sessionStorage.getItem("access-token") === null ? (
                  <Login {...props} baseUrl={this.baseUrl} />
                ) : (
                  <Messages />
                )
              }
            /> */}
          {/* <Route exact path="/dashboard" render={props => <App />} /> */}

          <Route exact path="/about" render={props => <About />} />
          <Route exact path="/contact" render={props => <Contact />} />
          <Route path="/gallary/:id" render={GallaryHome} />
          <Route path="/gallery" render={GalleryHome} />
          <Route path="/classrooms" render={ClassRooms} />
          <Route path="/sciencelab" render={ScienceLab} />
          <Route path="/roboticslab" render={RoboticsLab} />
          <Route path="/faculty" render={FacultyHome} />
          <Route exact path="/" render={Home} />
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

export default Controller;
