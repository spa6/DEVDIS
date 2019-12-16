import withRoot from "../withRoot";
// --- Post bootstrap -----
import React from "react";
import AppFooter from "./AppFooter";
import Header from "../../../common/Header";
import SchoolIntro from "./SchoolIntro";

function Index() {
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <Header screen={"Website"} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <SchoolIntro />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
