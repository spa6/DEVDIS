import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import ProductCategories from "./modules/views/ProductCategories";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import Testimonials from "./modules/views/Testimonials";
import SubscriptionList from "./modules/views/SubscriptionList";
import AppAppBar from "./modules/views/AppAppBar";
import Header from "../common/Header";
import SchoolIntro from "./modules/views/SchoolIntro";
import Login from "../screens/login/Login";

function Index() {
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <Header screen={"Website"} />
      <div className="container"></div>
      <ProductHero />
      <SchoolIntro />
      <ProductCategories />
      <Testimonials />
      <SubscriptionList />
      <ProductValues />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
