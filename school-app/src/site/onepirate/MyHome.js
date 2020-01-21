import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import MyHeader from "../common/MyHeader";
import CompanyServices from "./modules/views/CompanyServices";
import CompanyIntro from "./modules/views/CompanyIntro";
// import Login from "../screens/login/Login";

function Index() {
  return (
    <React.Fragment>
      <MyHeader />
      <CompanyServices />
      <CompanyIntro />
    </React.Fragment>
  );
}

export default withRoot(Index);
