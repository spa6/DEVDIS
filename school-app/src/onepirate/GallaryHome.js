import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import ProductCategories from "./modules/views/ProductCategories";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import AppAppBar from "./modules/views/AppAppBar";
import Header from "../common/Header";
import GallaryInfo from "./modules/views/GallaryInfo";
import { useParams } from "react-router-dom";

function Index() {
  let { id } = useParams();
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <Header screen={"Home"} />
      <GallaryInfo id={id} />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
