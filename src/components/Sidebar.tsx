import React from "react";
import { Card } from "react-bootstrap";

const Sidebar: React.FC = () => (
  <Card style={{ width: "18rem", position: "sticky", top: "70px" }}>
    <Card.Img
      variant="top"
      src="https://via.placeholder.com/150"
      alt="Profile"
    />
    <Card.Body>
      <Card.Title>Badong Badong</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        Software Engineer
      </Card.Subtitle>
      <Card.Text>
        Passionate developer specializing in full-stack development and modern
        web applications.
      </Card.Text>
      <Card.Link href="https://linkedin.com">LinkedIn</Card.Link>
      <Card.Link href="https://github.com">GitHub</Card.Link>
    </Card.Body>
  </Card>
);

export default Sidebar;
