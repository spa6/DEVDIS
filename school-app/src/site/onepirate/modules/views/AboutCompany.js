import withRoot from "../withRoot";
// --- Post bootstrap -----
import React from "react";
import MyHeader from "../../../common/MyHeader";
import CompanyIntro from "./CompanyIntro";
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
      <MyHeader screen={"Website"} />
      <div className="container"></div>
      <br />
      <div className={classes.body}>
      <CompanyIntro />
      </div>

    </React.Fragment>
  );
}

export default withStyles(styles)(withRoot(Index));
