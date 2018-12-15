import React from "react";
import LoginGreetingContainer from "../test/login_greeting_container";
import MainSection from "./main_section";
import SideNavContainer from "../side_nav/side_nav_container";
import { Route } from "react-router-dom";
import TestPage from "../test/test_page";

const MainPage = () => {
  if (false) {
    return <TestPage />;
  }
  return (
    <main className="main-page-wrapper">
      {/* <LoginGreetingContainer /> */}
      <SideNavContainer />

      <MainSection />
    </main>
  );
};

export default MainPage;
