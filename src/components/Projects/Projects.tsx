import React from "react";
import { Row, Col, Button } from "react-bootstrap";

interface ProjectCardProps {
  name: string;
  technologies: string;
  date: string;
  description: string;
  links: {
    live?: string;
    github?: string;
  };
  isFeatured?: boolean;
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
      "A personal portfolio and project archive built to showcase my technical experience, projects, coursework, and experiments across systems, AI, and web development.",
    links: {
      live: "https://onyangojerry.netlify.app/",
      github: "https://github.com/onyangojerry/portfolio-react",
    },
  },
  {
    name: "Adaptive Memory Allocation for Apache Spark",
    technologies: "Apache Spark, Distributed Systems, Fault Tolerance",
    date: "2026",
    description:
      "Investigated memory-computation tradeoffs in Apache Spark to improve resource utilization across large-scale distributed workloads. Designed a framework for exploring Pareto-optimal memory allocation strategies balancing execution memory, storage memory, shuffle overhead, and job latency.",
    links: {},
  },
  {
    name: "Scalable WireWalk via Karger Graph Contraction",
    technologies: "Graph Algorithms, Representation Learning, PageRank",
    date: "2026",
    description:
      "Extended the WireWalk graph embedding framework with Karger-style graph contraction to reduce traversal and rewiring overhead on large networks. Evaluated the approach on Protein-Protein Interaction networks with 1,500+ nodes and 16,000+ edges against DeepWalk and WireWalk variants.",
    links: {},
  },
  {
    name: "Context-on-Tabs (COTs)",
    technologies: "Distributed AI Retrieval, Knowledge Graphs, Agents",
    date: "2026",
    description:
      "Designed an interactive browser-based research platform that transforms highlighted content into connected contextual knowledge graphs managed by specialized AI agents. Architected retrieval pipelines, context persistence services, graph-based ranking, distributed embeddings, and multimodal ingestion designs.",
    links: {},
  },
  {
    name: "Control Systems Optimization (ONNYX & TinyPhysics)",
    technologies: "Python, ONNX, Simulation, Optimization",
    date: "2026",
    description:
      "Implemented, benchmarked and improved PID-based control policy in a closed-loop simulator driven by an ONNX autoregressive dynamics model. Reduced total control cost by 15.69% vs baseline PID across 5,000 simulated route segments (110.254 → 92.950), improving both tracking error and smoothness metrics. Added production-style enhancements: lookahead target blending, anti-windup integral clamping, derivative low-pass filtering, feedforward roll compensation, and speed-aware slew limiting.",
    links: {
      github: "https://github.com/onyangojerry/controls_challenge",
    },
  },
  {
    name: "Mvuvi (Vuva) — OCR Ingestion & Real-Time News Platform",
    technologies: "FastAPI, Redis, OCR, WebSocket, REST",
    date: "2025",
    description:
      "Designed an asynchronous data ingestion platform (FastAPI and Redis) to convert scanned newspapers into searchable, structured content. Integrated multi-engine OCR with preprocessing and cache keys, improving robustness on noisy multilingual inputs by 10%. Implemented authenticated REST and WebSocket APIs with rate limiting and observability hooks for real-time feeds.",
    links: {
      github: "https://github.com/onyangojerry/Mvuvi",
    },
  },
  {
    name: "CPU Pipeline Emulator",
    technologies: "C++, CPU Architecture, Systems Programming",
    date: "2025",
    description:
      "Built a cycle-accurate CPU emulator in C++ simulating single-cycle, simple pipelined, hazard-detection (stalling), and forwarding (bypassing) stages, modeling real hardware datapath behavior. Implemented explicit pipeline registers (Fetch→Decode→Execute→Writeback) with stall logic and drain control, demonstrating instruction-level parallelism and hazard management across 5,000+ simulated instruction sequences.",
    links: {
      github: "https://github.com/onyangojerry/pipeline-emulator",
    },
  },
  {
    name: "Stream — Real-Time Video Communication Platform",
    technologies: "WebRTC, React, TypeScript",
    date: "2024",
    description:
      "Built a WebRTC-based video conferencing platform supporting multi-party calls, screen sharing, and real-time collaboration for developers. Integrated authentication, host controls, and responsive UI layouts to deliver a secure, production-grade communication experience.",
    links: {
      github: "https://github.com/onyangojerry/Stream",
    },
  },
  {
    name: "25 Line Web Server",
    technologies: "Rust, Docker, HTML",
    date: "Dec. 2024 - Present",
    description:
      "Built a custom Rust HTTP server that processes incoming requests and serves index.html while responding with a 404 error for missing files. Upcoming features will enable developers to introduce their own processes for network troubleshooting during deployment.",
    links: {
      github: "https://github.com/onyangojerry/webserver",
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
