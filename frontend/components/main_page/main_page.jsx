import React from "react";
import LoginGreetingContainer from "../test/login_greeting_container";
import MainSection from "./main_section";
import SideNav from "../side_nav/side_nav";

const MainApp = () => {
  return (
    <main>
      {/* <LoginGreetingContainer /> */}
      <SideNav />
      <MainSection />
    </main>
  );
};

export default MainApp;
