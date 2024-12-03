import React from "react";
import { Row, Col, Button } from "react-bootstrap";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, link }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <Button variant="primary" href={link} target="_blank">
      View Project
    </Button>
  </div>
);

const projects = [
  {
    title: "Bmmasi Portal",
    description:
      "A personal portfolio built with React and TypeScript. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum laoreet convallis non sed purus. Ut porta accumsan est quis placerat. Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet mi.",
    link: "https://github.com/branley1/portfolio-react",
  },
  {
    title: "Sentimental Analysis with GRUs",
    description:
      "Predicting emotions with Gated Recurrent Units. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum laoreet convallis non sed purus. Ut porta accumsan est quis placerat. Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet mi.",
    link: "https://github.com/branley1/Predicting-emotions-with-GRUs.git",
  },
  {
    title: "Multi-label Classification with k-Nearest Neighbor",
    description:
      "Multi-label Classification with k-Nearest Neighbor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum laoreet convallis non sed purus. Ut porta accumsan est quis placerat. Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet mi.",
    link: "https://github.com/branley1/Multi-label-Classification-with-k-Nearest-Neighbor.git",
  },
  {
    title: "iOS Flashcard App",
    description:
      "A fully-functional iOS Flashcard app build using Swift and Xcode. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum laoreet convallis non sed purus. Ut porta accumsan est quis placerat. Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet mi.",
    link: "https://github.com/branley1/flashcard-update.git",
  },
  {
    title: "CodePath.org",
    description:
      "Built iOS apps as part of CodePath.org iOS Mobile Design Course. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum laoreet convallis non sed purus. Ut porta accumsan est quis placerat. Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet mi.",
    link: "https://github.com/branley1/codepath-iOS.git",
  },
  {
    title: "Custom Project",
    description:
      "A custom project intended to be built with <language 1> and <language 2>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum laoreet convallis non sed purus. Ut porta accumsan est quis placerat. Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet mi.",
    link: "https://github.com/branley1/",
  },
];

const ProjectsShowcase: React.FC = () => (
  <section id="custom-projects" className="projects-section my-4">
    <h2>Projects</h2>
    <Row className="g-4 justify-content-left project grid">
      {projects.map((project, index) => (
        <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
          <ProjectCard
            title={project.title}
            description={project.description}
            link={project.link}
          />
        </Col>
      ))}
    </Row>
  </section>
);

export default ProjectsShowcase;
