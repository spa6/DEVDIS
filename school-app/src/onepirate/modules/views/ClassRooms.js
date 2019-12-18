import withRoot from "../withRoot";
// --- Post bootstrap -----
import React from "react";
import AppFooter from "./AppFooter";
import Header from "../../../common/Header";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";

function ClassRooms() {
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <Header screen={"Website"} />
      <div className="container"></div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={10}></Grid>
        </Grid>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(ClassRooms);
