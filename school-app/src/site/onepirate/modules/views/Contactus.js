import withRoot from "../withRoot";
// --- Post bootstrap -----
import React from "react";
import AppFooter from "./AppFooter";
import Header from "../../../common/Header";
import ContactUsFrom from "./ContactUsFrom";

function Index() {
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <Header screen={"Website"} />
      <ContactUsFrom />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
