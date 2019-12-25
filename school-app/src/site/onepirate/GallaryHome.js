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
import GallaryInfo from "./modules/views/GallaryInfo";
import { useParams } from "react-router-dom";
import Faculty from "./modules/views/Faculty";
import Facility from "./modules/views/Facilities";

function Index() {
  let { id } = useParams();
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <Header screen={"Home"} />
      {id === "2" && <Faculty id={id} />}
      {id === "6" && <Facility id={id} />}
      {id != "2" && id != "6" && <GallaryInfo id={id} />}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
