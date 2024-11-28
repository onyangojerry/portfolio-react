import React from "react";
import CustomNavbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/HeroSection/HeroSection";
import AboutMe from "./components/ABoutMe/AboutMe";
import ExperienceTimeline from "./components/ExperienceTimeline/ExperienceTimeline";
import ProjectsShowcase from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";

const App: React.FC = () => (
  <div className="app-container">
    <CustomNavbar />
    <Hero />
    <div className="content-wrapper">
      <Sidebar />
      <main className="main-content">
        <AboutMe />
        <ExperienceTimeline />
        <ProjectsShowcase />
      </main>
    </div>
    <Footer />
  </div>
);

export default App;
