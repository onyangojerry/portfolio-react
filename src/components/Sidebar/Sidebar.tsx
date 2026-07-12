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
        <a
          href="https://open.spotify.com/user/xafrumx47d4e0kygeqpyqpsx8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://spotify-github-profile.kittinanx.com/api/view?uid=xafrumx47d4e0kygeqpyqpsx8&cover_image=true&theme=default&show_offline=false&background_color=121212&interchange=true&profanity=false&bar_color_cover=true"
            alt="Spotify Now Playing"
          />
        </a>
      </h5>
      <Card.Body>
        <Card.Title>Technically, I do!</Card.Title>
        <ul className="skills-list">
          <li>
            <strong>Algorithms Design</strong>
            <span>
              Randomized Algorithms,
              Approximation Algorithms,
              Divide and Conquer,
              Greedy Algorithms,
              Dynamic Programming,
              Backtracking,
              Branch and Bound,
              Graph Algorithms,
              String Algorithms,
              Computational Geometry
            </span>
          </li>
          <li>
            <strong>Distributed Systems & Big Data: </strong>
            <span>
              Apache Spark, Hadoop, distributed storage systems, fault
              tolerance, data pipelines, graph processing, parallel computing
            </span>
          </li>
          <li>
            <strong>Machine Learning: </strong>
            <span>
              Graph embeddings, DeepWalk, WireWalk, PageRank, representation
              learning, data mining, Scikit-learn, Keras, TensorFlow, PyTorch,
              OpenAI API, Hugging Face, Gemini 2.0 API
            </span>
          </li>
          <li>
            <strong>Languages: </strong>
            <span>
              C++, C, Python, Rust, Java, R, Haskell, JavaScript, TypeScript,
              HTML/CSS
            </span>
          </li>
          <li>
            <strong>Frameworks: </strong>
            <span>
              FastAPI, Flask, Django, SaltStack, React, Vue.js
            </span>
          </li>
          <li>
            <strong>Database: </strong>
            <span>PostgreSQL, MySQL, SQL, MongoDB, Redis</span>
          </li>
          <li>
            <strong>Cloud & Infrastructure: </strong>
            <span>
              Docker, Kubernetes, Linux, Git, CI/CD, AWS, GCP, Azure,
              Cloudflare
            </span>
          </li>
          <li>
            <strong>Tools: </strong>
            <span>
              REST APIs, WebSocket APIs, NetworkX, Pandas, NumPy, Prometheus,
              Grafana, Jupyter Notebook, Google Colab
            </span>
          </li>
        </ul>
        <CardTitle>Courses</CardTitle>
        <ul className="future-courses">
          <li>Real-Time Systems for Embedded Systems</li>
          <li>Neural Networks / Deep Learning</li>
          <li>Algorithms and Advanced Algorithms</li>
          <li>Machine Learning</li>
          <li>Natural Language Processing</li>
          <li>Real-Time Operating Systems</li>
          <li>Computer Architecture</li>
          <li>Computer Systems</li>
          <li>Research in Robotics</li>
          <li>Probability</li>
          <li>Advanced Data Structures</li>
        </ul>
        <Card.Title>Course Highlight</Card.Title>
        <ul className="course-highlight">
          <li>
            <strong>Computer Science:</strong>
            <ul>
              <li>Intro to Python with AI</li>
              <li>Computer Systems</li>
              <li>Data Structures and Advanced Programming</li>
              <li>Functional Programming and Discrete Math</li>
              <li>Natural Language Processing</li>
            </ul>
          </li>
          <li>
            <strong>Math & Statistics:</strong>
            <ul>
              <li>Single-variable Calculus I</li>
              <li>Multi-variable Calculus II & III</li>
              <li>Linear Algebra</li>
              <li>Statistics I & Regression</li>
            </ul>
          </li>
          <li>
            <strong>Sociology and Social Sciences:</strong>
            <ul>
              <li>Globalizations</li>
            </ul>
          </li>
          <li>
            <strong>Art History:</strong>
            <ul>
              <li>ARHI86K: Building Empires</li>
              <li>Modern Arch/Sustainability</li>
            </ul>
          </li>
          <li>
            <strong>Philosophy:</strong>
            <ul>
              <li>Epistemology</li>
              <li>intimate Relationships</li>
              <li>Philosophy Of Time</li>
            </ul>
          </li>
          <li>
            <strong>Music:</strong>
            <ul>
              <li>Group Piano</li>
            </ul>
          </li>
          <li>
            <strong>Film</strong>
            <ul>
              <li>Intro to Film</li>
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
        <Card.Link href="https://www.linkedin.com/in/jerry-rawlings-onyango/">
          LinkedIn
        </Card.Link>
        <Card.Link href="https://github.com/onyangojerry">GitHub</Card.Link>
      </Card.Body>
    </Card>
  </div>
);

export default Sidebar;
