import React from "react";
import CustomNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ExperienceTimeline from "./components/Experience";
import ProjectsShowcase from "./components/Projects";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";

const App: React.FC = () => (
  <div>
    <CustomNavbar />
    <Hero />
    <Container className="mt-5 pt-5">
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <AboutMe />
          <ExperienceTimeline />
          <ProjectsShowcase />
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default App;
