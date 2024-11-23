import React from "react";
import { Card } from "react-bootstrap";
import "/src/styles/custom.scss";

const Sidebar: React.FC = () => (
  <Card
    className="sidebar-card"
    style={{
      width: "50%",
      minWidth: "250px",
      position: "sticky",
      top: "70px",
      right: "0",
      zIndex: 1000,
      fontFamily: "IBM Plex Mono",
      color: "var(--text-color)",
      backgroundColor: "var(--bg-color)",
    }}
  >
    <Card.Img
      variant="top"
      src="https://via.placeholder.com/150"
      alt="Profile"
    />
    <Card.Body>
      <Card.Title>Technical Skills</Card.Title>

      <Card.Subtitle className="mb-2 text-muted">
        1. Machine Learning
      </Card.Subtitle>
      <Card.Text>
        Scikit-learn, Keras, Tensorflow, OpenAI API, Hugging Face, XGBoost
      </Card.Text>
      <Card.Subtitle className="mb-2 text-muted">2. Languages</Card.Subtitle>
      <Card.Text>
        C++, C, Python, Swift, HTML5, CSS, JavaScript, React Native, R, GoLang,
        TypeScript
      </Card.Text>
      <Card.Subtitle className="mb-2 text-muted">3. Frameworks</Card.Subtitle>
      <Card.Text>
        gRPC, React JS, Tensorflow, Pytorch, Django, SwiftUI, Keras, Node.js,
        Codespaces, Vue.js, Vite.js
      </Card.Text>
      <Card.Subtitle className="mb-2 text-muted">4. Database</Card.Subtitle>
      <Card.Text>SQL, MySQL, PostgreSQL, MongoDB</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">5. Tools</Card.Subtitle>
      <Card.Text>
        REST APIs, Git/GitHub, RabbitMQ, Xcode, Apache Flume, Jupyter Notebooks,
        Google Cloud Platform, AWS
      </Card.Text>
      <Card.Link href="https://linkedin.com/in/bmmasi1">LinkedIn</Card.Link>
      <Card.Link href="https://github.com/branley1">GitHub</Card.Link>
    </Card.Body>
  </Card>
);

export default Sidebar;
