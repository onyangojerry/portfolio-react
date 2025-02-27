import React from "react";
import { Row, Col, Button } from "react-bootstrap";

interface ProjectCardProps {
  name: string;
  technologies: string;
  date: string;
  description: string;
  links: {
    live?: string; // Optional live site link
    github?: string; // Optional GitHub link
  };
  isFeatured?: boolean; // Optional boolean to indicate if the project is featured
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  technologies,
  date,
  description,
  links,
  isFeatured,
}) => (
  <div className="project-card">
    {/* Render custom live button for site */}
    <h3>{name}</h3>
    <p>
      <strong>Technologies:</strong> {technologies}
    </p>
    <p>
      <strong>Date:</strong> {date}
    </p>
    <p>{description}</p>
    <div className={`links ${isFeatured ? "featured-links" : ""}`}>
      {isFeatured && links.live && (
        <Button
          className="live-button"
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Live Site
        </Button>
      )}
      {/* Use default Button for GitHub link or regular projects */}
      {links.github && (
        <Button
          className="github-button"
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </Button>
      )}
    </div>
  </div>
);

const projects = [
  {
    name: "Jerryonyango Portal",
    technologies: "React (TypeScript, HTML, SCSS, JavaScript)",
    date: "Nov. 2024 - Present",
    description:
      "A responsive portfolio website showcasing my projects and skills, built with React and TypeScript.",
    links: {
      live: "https://onyangojerry.netlify.app/",
      github: "https://github.com/onyangojerry/portfolio-react",
    },
  },
  {
    name: "Botbot",
    technologies:
      "React (Python, DistilBert), Node.js/Express",
    date: "October. 2024 - Present",
    description:
      "Creating and training a functional bot that scraps data from a website in real time and answers with desired information. Has achieved a functionality accuracy of 96% so far. Plans to incorporate as pert of school website.",
    links: {
      github: "https://github.com/onyangojerry/botbot",
    },
  },
  {
    name: "Word Simulation",
    technologies:
      "Java",
    date: "October 2024 - October 2024",
    description:
      "Collaborated in building and training a model that identifies word similarities including synonyms and typos. Achieved a 95% accuracy, published model on GitHub. within the Swahili-speaking community.",
    links: {
      github: "https://github.com/pomonaCS159-fa2024/assignment-5-onyngo-etefa",
    },
  },
  {
    name: "25 Line Web Server",
    technologies: "Rust, Docker,HTML",
    date: "Dec. 2024 - Present",
    description:
      "Built a custom Rust HTTP server that processes incoming requests and serves index.html while responding with a 404 error for missing files; refined development processes by enabling rapid testing and troubleshooting for developers.Monitored the webserver processes through deployment identifying networking flow and possible issues improving my mastery for unix systems commands.",
    links: {
      github: "https://github.com/onyangojerry/webserver",
    },
  },
  {
    name: "Credit card Validator",
    technologies: "Haskell",
    date: "November 2023 - November 2023",
    description:
      "Developed a robust credit card validation codebase in Haskell, incorporating advanced techniques like list manipulation and the Luhn Algorithm; minimized system downtime by ensuring 99.9percent uptime for accelerated transaction finance security",
    links: {
      github: "https://github.com/onyangojerry/CreditCard",
    },
  },
  {
    name: "Advanced NLP Parser",
    technologies: "Java",
    date: "October 2024 - October 2024",
    description:
      "Collaborated in implementing CKY parsing algorithm that uses CNF and advanced Grammar Rules to break adn tag words in a sentence. Achieved a 96% accuracy and an algorithmically efficient time of under 5 minutes",
    links: {
      github: "https://github.com/pomonaCS159-fa2024/assignment-4-onyangofisherman",
    },
  },
];

const ProjectsShowcase: React.FC = () => (
  <section id="custom-projects" className="projects-section my-4">
    <h2>Projects</h2>
    <Row className="g-4 justify-content-left project grid">
      {projects.map((project, index) => (
        <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
          <ProjectCard key={index} {...project} isFeatured={index === 0} />
        </Col>
      ))}
    </Row>
  </section>
);

export default ProjectsShowcase;
