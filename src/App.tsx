import React from "react";
import CustomNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ExperienceTimeline from "./components/Experience";
import ProjectsShowcase from "./components/Projects";
import Footer from "./components/Footer";
import "./styles/custom.scss";

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
