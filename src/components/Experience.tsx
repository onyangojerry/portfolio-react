import React from "react";

interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  role,
  company,
  duration,
  description,
}) => (
  <div className="mb-3">
    <h4>{role}</h4>
    <h5>{company}</h5>
    <p>
      <em>{duration}</em>
    </p>
    <p>{description}</p>
  </div>
);

const ExperienceTimeline: React.FC = () => (
  <section
    id="experience"
    className="my-4"
    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
  >
    <h2>Experience</h2>
    <ExperienceItem
      role="Frontend Developer"
      company="TechCorp"
      duration="Jan 2020 - Dec 2022"
      description="Developed modern UI components using React and integrated them with backend APIs."
    />
    <ExperienceItem
      role="Software Engineer"
      company="InnovateSoft"
      duration="Jan 2018 - Dec 2019"
      description="Worked on full-stack solutions, optimizing application performance and scalability."
    />
  </section>
);

export default ExperienceTimeline;
