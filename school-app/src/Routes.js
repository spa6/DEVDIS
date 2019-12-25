import React from 'react';
import { Switch, Redirect,Route } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import Home from "./site/onepirate/Home";
import GallaryHome from "./site/onepirate/GallaryHome";
import About from "./site/onepirate/modules/views/About";
import Contact from "./site/onepirate/modules/views/Contactus";
import ClassRooms from "./site/onepirate/modules/views/ClassRooms";
import ScienceLab from "./site/onepirate/modules/views/ScienceLab";
import RoboticsLab from "./site/onepirate/modules/views/RoboticsLab";
import GalleryHome from "./site/onepirate/GalleryHome";
import FacultyHome from "./site/onepirate/FacultyHome";

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      /> 
      <Route exact path="/home" render={Home} />
      <Route exact path="/about" render={props => <About />} />
          <Route exact path="/contact" render={props => <Contact />} />
          <Route path="/gallary/:id" render={GallaryHome} />
          <Route path="/gallery" render={GalleryHome} />
          <Route path="/classrooms" render={ClassRooms} />
          <Route path="/sciencelab" render={ScienceLab} />
          <Route path="/roboticslab" render={RoboticsLab} />
          <Route path="/faculty" render={FacultyHome} />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
