import React from "react";
import "./_experience-timeline.scss";

interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string | string[];
}
const ExperienceItem: React.FC<ExperienceProps> = ({
  role,
  company,
  duration,
  location,
  description,
}) => (
  <div className="experience-item">
    <h4>{role}</h4>
    <h5>
      {company} | {location}
    </h5>
    <p>
      <em>{duration}</em>
    </p>
    {Array.isArray(description) ? (
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p>{description}</p>
    )}
  </div>
);

const ExperienceTimeline: React.FC = () => (
  <section id="experience" className="my-4 experience-timeline">
    <h2>Technical Experience</h2>
    <ExperienceItem
      role="Full-Stack Engineer"
      company="Feraj Energy Limited"
      duration="2024 - 2025"
      location="Remote"
      description={[
        "Led full-stack development of a production e-commerce and internal analytics/admin platform using React, Vue.js, and a Flask backend, reducing operational costs by 30%.",
        "Designed and enforced four-tier RBAC with granular permissions using JWT auth and database Row Level Security; prevented unauthorized access to privileged operations, cutting security vulnerability tickets by 35+ weekly.",
        "Implemented audit logging for role changes and sensitive actions using indexed event tables, improving traceability and operational accountability, reducing review time by 2 hours weekly.",
        "Developed validated CRUD pipelines and RESTful APIs for catalog, inventory, and order tracking, reducing operational errors by enforcing consistent data contracts across UI and database and cutting overall operational cost expenditure by 10%.",
      ]}
    />
    <ExperienceItem
      role="Junior Systems Analyst"
      company="Pomona College Data Center and High Performance Computing (HPC)"
      duration="2024 - 2026"
      location="Claremont, CA"
      description={[
        "Developed a real-time package testing and server automation system in Python and Flask, applying software engineering fundamentals to reduce server downtime for 5C internal GPUs by 40%.",
        "Implemented efficient caching, queuing, and firewalls for 5C's campus small area network, reducing security software threats by 20%+ weekly.",
        "Deployed an adaptive security chatbot using Vue.js and Python to respond to security-related tickets, cutting security tickets by 30% biweekly.",
      ]}
    />
    <ExperienceItem
      role="IT Help Desk Technician"
      company="Pomona College"
      duration="August 2022 - August 2024"
      location="Claremont, CA"
      description={[
        "Executed software upgrades and patch implementations, addressing an average of 35 IT-related tickets per week, improving system efficiency by 20%, and boosting user satisfaction in a high-demand environment.",
        "Spearheaded the effort to incorporate automation and bot assistants into FreshService ticket management for IT solutions.",
      ]}
    />
  </section>
);

export default ExperienceTimeline;
