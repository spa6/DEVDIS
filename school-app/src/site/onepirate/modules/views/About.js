import withRoot from "../withRoot";
// --- Post bootstrap -----
import React from "react";
import AppFooter from "./AppFooter";
import Header from "../../../common/Header";
import SchoolIntro from "./SchoolIntro";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  body: {
    minHeight: theme.spacing(70)
  }
});
function Index(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <Header screen={"Website"} />
      <div className="container"></div>
      <div className={classes.body}>
        <SchoolIntro />
      </div>

      <AppFooter />
    </React.Fragment>
  );
}

export default withStyles(styles)(withRoot(Index));
