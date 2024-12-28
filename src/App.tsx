import React from "react";
import ReactGA from "react-ga4";
import Layout from "./components/Layouts/Layout";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import ExperienceTimeline from "./components/ExperienceTimeline/ExperienceTimeline";
import ExtraExperience from "./components/ExtraExperience/ExtraExperience";
import ProjectsShowcase from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";

// Initialize Google analytics
const googleAnalyticsKey = import.meta.env.VITE_GOOGLE_ANALYTICS_KEY;
if (googleAnalyticsKey) {
  ReactGA.initialize(googleAnalyticsKey);
}

const App: React.FC = () => (
  <div className="app-container">
    <CustomNavbar />
    <Hero />
    <div className="content-container">
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
