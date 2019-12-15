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
import Gallery from "./Gallery";
import { useParams } from "react-router-dom";

function Index() {
  let { id } = useParams();
  console.log(id);
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <Header />
      <Gallery />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);