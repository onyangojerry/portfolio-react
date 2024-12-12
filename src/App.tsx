import React from "react";
import ReactGA from "react-ga4";
import Layout from "./components/Layouts/Layout";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import ExperienceTimeline from "./components/ExperienceTimeline/ExperienceTimeline";
import ExtraExperience from "./components/ExperienceTimeline/ExperienceTimeline";
import ProjectsShowcase from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";

// Initialize Google analytics
ReactGA.initialize("G-Y2Y4Z8YTCS");

const App: React.FC = () => (
  <div className="app-container">
    <CustomNavbar />
    <Hero />
    <div className="content-container">
      {/* Wraps content below Hero */}
      <Layout>
        <AboutMe />
        <ExperienceTimeline />
        <ExtraExperience />
      </Layout>
    </div>
    <ProjectsShowcase />
    <Footer />
  </div>
);

export default App;
