import React from "react";
import { Card } from "react-bootstrap";
import "./_sidebar.scss";

import profileImage from "../../assets/images/sidebar/sidebargif.webp";
import courseImage from "../../assets/images/sidebar/education.jpg";

const Sidebar: React.FC = () => (
  <div className="sidebar">
    <Card className="sidebar-card">
      <Card.Img
        variant="top"
        src={profileImage}
        alt="Profile"
        className="sidebar-profile-image"
        loading="eager"
      />
      <Card.Body>
        <Card.Title>Technical Skills</Card.Title>
        <ul className="skills-list">
          <li>
            <strong>Machine Learning: </strong>
            <span>
              Scikit-learn, Keras, TensorFlow, OpenAI API, Hugging Face, XGBoost
            </span>
          </li>
          <li>
            <strong>Languages: </strong>
            <span>
              C++, C, Python, Swift, HTML5, CSS, JavaScript, React Native, R,
              GoLang, TypeScript
            </span>
          </li>
          <li>
            <strong>Frameworks: </strong>
            <span>
              gRPC, React JS, TensorFlow, PyTorch, Django, SwiftUI, Keras,
              Node.js, Codespaces, Vue.js, Vite.js
            </span>
          </li>
          <li>
            <strong>Database: </strong>
            <span>SQL, MySQL, PostgreSQL, MongoDB</span>
          </li>
          <li>
            <strong>Tools: </strong>
            <span>
              REST APIs, Git/GitHub, RabbitMQ, Xcode, Apache Flume, Jupyter
              Notebooks, Google Cloud Platform, AWS
            </span>
          </li>
        </ul>
        <Card.Img
          variant="top"
          src={courseImage}
          alt="Profile"
          className="sidebar-course-image"
          loading="eager"
        />
        <Card.Title>Course Highlight</Card.Title>
        <ul className="course-highlight">
          <li>Data Structures and Algorithms</li>
          <li>Machine Learning</li>
          <li>Algorithms</li>
          <li>Artificial Intelligence</li>
          <li>Software Engineering</li>
          <li>Compilers</li>
          <li>Theory of Computation</li>
          <li>Intro to Computer Science</li>
          <li>Intro to Computer Systems</li>
          <li>Linear Algebra</li>
          <li>Discrete Mathematics</li>
          <li>Intro to Economics</li>
          <li>Single-variable Calculus I</li>
          <li>Single-variable Calculus II</li>
          <li>Statistical Methods I</li>
          <li>Psychology of Language</li>
          <li>Cognitive Psychology</li>
          <li>Social Psychology</li>
          <li>Intro to Cognitive Science</li>
          <li>Marx and Marxism</li>
          <li>Intro to Psychology</li>
          <li>Intro to Linguistics</li>
          <li>Intro to Philosophy</li>
          <li>Logic</li>
          <li>Basics of Reading and Writing Music Notation</li>
          <li>Intro to Music Technology</li>
          <li>Acting I</li>
          <li>Intro to International Relations</li>
          <li>Namaste America</li>
          <li>Poststructuralism</li>
        </ul>
        <Card.Link href="https://linkedin.com/in/bmmasi1">LinkedIn</Card.Link>
        <Card.Link href="https://github.com/branley1">GitHub</Card.Link>
      </Card.Body>
    </Card>
  </div>
);

export default Sidebar;
