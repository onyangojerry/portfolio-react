import React from "react";
import { Card } from "react-bootstrap";
import "/src/components/Sidebar/_sidebar.scss";

const Sidebar: React.FC = () => (
  <div className="sidebar">
    <Card className="sidebar-card">
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/150"
        alt="Profile"
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
        <Card.Link href="https://linkedin.com/in/bmmasi1">LinkedIn</Card.Link>
        <Card.Link href="https://github.com/branley1">GitHub</Card.Link>
      </Card.Body>
    </Card>
  </div>
);

export default Sidebar;
