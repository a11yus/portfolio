import "./Main.css";
import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import { StyleProvider } from "../contexts/StyleContext";

export default class Main extends Component {
  state = {
    isDark: false,
  };

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState((prevState) => {
      return { isDark: !prevState.isDark };
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <Greeting />
          <Skills />
          <Projects />
          <WorkExperience />
          <Achievement />
          <Blogs />
          <Talks />
          <Twitter />
          <Contact />
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
