import React from "react";
import { Card, CardTitle } from "react-bootstrap";
import "./_sidebar.scss";
import profileImage from "../../assets/images/sidebar/sidebargif.webp";
import courseImage from "../../assets/images/sidebar/education.jpg";
import lastImage from "../../assets/images/sidebar/qr-code.png";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => (
  <div className={`sidebar ${className}`}>
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
              Scikit-learn, Keras, TensorFlow, Gemini 2.0 API, OpenAI API,
              Hugging Face, XGBoost
            </span>
          </li>
          <li>
            <strong>Languages: </strong>
            <span>
              C++, C, Python, Swift, HTML5/CSS, SASS, JavaScript, React Native,
              R, GoLang, TypeScript, Perl, Rust
            </span>
          </li>
          <li>
            <strong>Frameworks: </strong>
            <span>
              React JS, Tensorflow, Pytorch, Keras, Django, SwiftUI, Next.js,
              Vue.js, Vite, Node.js, JUCE
            </span>
          </li>
          <li>
            <strong>Database: </strong>
            <span>SQL, MySQL, PostgreSQL, MongoDB</span>
          </li>
          <li>
            <strong>Tools: </strong>
            <span>
              gRPC, REST APIs, Git/GitHub, RabbitMQ, Xcode, Apache Flume,
              Jupyter Notebook, Google Cloud Platform, AWS, WebAPIs, Google
              Colab
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
          <li>
            <strong>Computer Science:</strong>
            <ul>
              <li>CPSC 021: Intro to Computer Science</li>
              <li>CPSC 031: Intro to Computer Systems</li>
              <li>CPSC 035: Data Structures and Algorithms</li>
              <li>CPSC 041: Algorithms</li>
              <li>CPSC 046: Theory of Computation</li>
              <li>CPSC 063: Artificial Intelligence</li>
              <li>CPSC 066: Machine Learning</li>
            </ul>
          </li>
          <li>
            <strong>Math & Statistics:</strong>
            <ul>
              <li>MATH 015: Single-variable Calculus I</li>
              <li>MATH 025: Single-variable Calculus II</li>
              <li>MATH 027: Linear Algebra</li>
              <li>MATH 039: Discrete Mathematics</li>
              <li>STAT 011: Statistical Methods I</li>
            </ul>
          </li>
          <li>
            <strong>Cognitive Science & Psychology:</strong>
            <ul>
              <li>COGS 001: Intro to Cognitive Science</li>
              <li>PSYC 001: Intro to Psychology</li>
              <li>PSYC 034: Psychology of Language</li>
              <li>PSYC 033: Cognitive Psychology</li>
              <li>PSYC 035: Social Psychology</li>
            </ul>
          </li>
          <li>
            <strong>Philosophy:</strong>
            <ul>
              <li>PHIL 001A: Intro to Philosophy</li>
              <li>PHIL 012B: Logic</li>
              <li>PHIL 034: Marx and Marxism</li>
              <li>PHIL 079: Poststructuralism</li>
            </ul>
          </li>
          <li>
            <strong>Music:</strong>
            <ul>
              <li>MUSC 002B: Reading & Making Music: Basics of Notation</li>
              <li>MUSC 003A: Intro to Music Technology</li>
            </ul>
          </li>
          <li>
            <strong>
              Linguistics, Economics, Political Science, Theatre, English &
              Religion:
            </strong>
            <ul>
              <li>LING 001: Intro to Linguistics</li>
              <li>ECON 001: Intro to Economics</li>
              <li>POLS 004: Intro to International Relations</li>
              <li>ENGL 001F: FYS: Transition to College Writing (W)</li>
              <li>THEA 002A: Acting I</li>
              <li>RELG 073: Namaste America</li>
            </ul>
          </li>
        </ul>
        <CardTitle>Future Courses (Spring 2025)</CardTitle>
        <ul className="future-courses">
          <li>CPSC 071: Software Engineering</li>
          <li>CPSC 075: Compilers</li>
          <li>CPSC 072: Computer Vision</li>
          <li>CPSC 099: Senior Comprehensive</li>
          <li>PHIL 118: Philosophy of Mind</li>
        </ul>
        <Card.Img
          variant="top"
          src={lastImage}
          alt="Profile"
          className="sidebar-profile-image"
          loading="eager"
        />
        <Card.Link href="https://linkedin.com/in/bmmasi1">LinkedIn</Card.Link>
        <Card.Link href="https://github.com/branley1">GitHub</Card.Link>
      </Card.Body>
    </Card>
  </div>
);

export default Sidebar;
