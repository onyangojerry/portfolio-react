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
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and TypeScript. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum laoreet convallis non sed purus. Ut porta accumsan est quis placerat. Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet mi.",
    link: "https://github.com/branley1",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and TypeScript. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum laoreet convallis non sed purus. Ut porta accumsan est quis placerat. Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet mi.",
    link: "https://github.com/branley1",
  },
  {
    title: "Palantir Orb",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum laoreet convallis non sed purus. Ut porta accumsan est quis placerat. Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet mi.",
    link: "https://github.com/branley1",
  },
  {
    title: "Porland Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum laoreet convallis non sed purus. Ut porta accumsan est quis placerat. Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet mi.",
    link: "https://github.com/branley1",
  },
  {
    title: "Another one",
    description:
      "A personal portfolio built with React and TypeScript. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum laoreet convallis non sed purus. Ut porta accumsan est quis placerat. Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet mi.",
    link: "https://github.com/branley1",
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
