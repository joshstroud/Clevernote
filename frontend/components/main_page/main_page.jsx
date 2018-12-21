import React from "react";
import LoginGreetingContainer from "../test/login_greeting_container";
import MainSection from "./main_section";
import SideNavContainer from "../side_nav/side_nav_container";
import { Route } from "react-router-dom";
import TestPage from "../test/test_page";
import Modal from "../ui_elements/modals/modal";
import NoteShowContainer from "../note_show/note_show_container";

const MainPage = props => {
  if (false) {
    // if props.fullScreen
    return (
      <main className="main-page-wrapper">
        <NoteShowContainer />
      </main>
    );
  }
  return (
    <main className="main-page-wrapper">
      {/* <LoginGreetingContainer /> */}
      <Modal />

      <SideNavContainer />
      <MainSection />
    </main>
  );
};

export default MainPage;
