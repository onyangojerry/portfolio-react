import React from "react";
import { Card, CardTitle } from "react-bootstrap";
import "./_sidebar.scss";
// import profileImage from "../../assets/images/sidebar/sidebargif.webp";
// import courseImage from "../../assets/images/sidebar/education.jpg";
import lastImage from "../../assets/images/sidebar/qr-code.png";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => (
  <div className={`sidebar ${className}`}>
    <Card className="sidebar-card">
      <h5>
        Current Mood 🎧
        <a><i>
            <img src="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=xafrumx47d4e0kygeqpyqpsx8&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false)](https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&redirect=true)"></img>
            </i>
          </a>
      </h5>
      <Card.Body>
        <Card.Title>Technical Skills</Card.Title>
        <ul className="skills-list">
          <li>
            <strong>Machine Learning: </strong>
            <span>
              Scikit-learn, Keras, TensorFlow, PyTorch, OpenAI API, Hugging Face, Gemini 2.0 API
            </span>
          </li>
          <li>
            <strong>Languages: </strong>
            <span>
              C++, C, Python, Rust, Java, R, Haskell, JavaScript, TypeScript, HTML/CSS
            </span>
          </li>
          <li>
            <strong>Frameworks: </strong>
            <span>
              Flask, Django, SaltStack
            </span>
          </li>
          <li>
            <strong>Database: </strong>
            <span>MySQL, PostgreSQL, SQL, MongoDB</span>
          </li>
          <li>
            <strong>Tools: </strong>
            <span>
              REST APIs, Git/GitHub, Jupyter Notebook, AWS, WebAPIs, Google Colab, Websocket APIs
            </span>
          </li>
        </ul>
        <CardTitle>Current Courses (Spring 2025)</CardTitle>
        <ul className="future-courses">
          <li>CPSC 181R: Real-Time Systems for Embeded Systems</li>
          <li>CPSC 152: Neural Networks/ Deep Learning</li>
          <li>CPSC 140: Algorithms</li>
        </ul>
        <h5>
          🎧
            <a><i>
              <img src="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false)](https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&redirect=true)"></img>
            </i>
            </a>
        </h5>
        <Card.Title>Course Highlight</Card.Title>
        <ul className="course-highlight">
          <li>
            <strong>Computer Science:</strong>
            <ul>
              <li>CPSC 051: Intro to Python with AI</li>
              <li>CPSC 105: Computer Systems</li>
              <li>CPSC 062: Data Structures and Advanced Programming</li>
              <li>CPSC 054: Functional Programming and Discrete Math</li>
              <li>CPSC 159: Natural Language Processing</li>
            </ul>
          </li>
          <li>
            <strong>Math & Statistics:</strong>
            <ul>
              <li>MATH 030: Single-variable Calculus I</li>
              <li>MATH 031: Multi-variable Calculus II</li>
              <li>MATH 032: Multi-variable Calculus III</li>
              <li>MATH 062: Linear Algebra</li>
              <li>MATH 052: Intro to Statistics</li>
            </ul>
          </li>
          <li>
            <strong>Sociology and Social Sciences:</strong>
            <ul>
              <li>SOC 001: Globalizations</li>
            </ul>
          </li>
          <li>
            <strong>Art History:</strong>
            <ul>
              <li>ARHI86K: Building Empires</li>
              <li>ARHI179: Modern Arch/Sustainability</li>
            </ul>
          </li>
          <li>
            <strong>Philosophy:</strong>
            <ul>
              <li>PHIL081: Epistemology</li>
            </ul>
          </li>
          <li>
            <strong>Music:</strong>
            <ul>
              <li>MUSC 002B: Intro to Group Piano</li>
            </ul>
          </li>
          <li>
            <strong>Film</strong>
            <ul>
              <li>MS 050: Intro to Film</li>
            </ul>
          </li>
        </ul>
        <Card.Img
          variant="top"
          src={lastImage}
          alt="Profile"
          className="sidebar-profile-image"
          loading="eager"
        />
        <Card.Link href="https://www.linkedin.com/in/jerry-rawlings-onyango/">LinkedIn</Card.Link>
        <Card.Link href="https://github.com/onyangojerry">GitHub</Card.Link>
      </Card.Body>
    </Card>
  </div>
);

export default Sidebar;
