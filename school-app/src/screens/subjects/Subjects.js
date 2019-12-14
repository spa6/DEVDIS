import React, { Component } from "react";
import Header from "../../common/Header";
import MaterialTable from 'material-table';
import { withStyles } from "@material-ui/styles";
import { List } from "semantic-ui-react";
import SubjectProgress from "../progress/Progress";

import Container from "@material-ui/core/Container";
const styles = theme => ({
});



export default function MaterialTableDemo() {
  return (
    <div>
        <Header
          screen={"Subjects"}
          //userProfileUrl={this.state.profile_picture}
        />
        <div className="container">
          <br></br>
        <Container fixed>
          <SubjectProgress></SubjectProgress>
          </Container>
        </div>
        </div>
    
  );
    
}
