import React from "react";
import "./_extra-experience.scss";

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
  <section id="extra-experience" className="my-4 experience-timeline">
    <h2>Extracurricular Experience</h2>
    <ExperienceItem
      role="
      Equity Global Scholars Mentor"
      company="Equity Group KE"
      duration="Jul 2021 - March 2022"
      location="Nairobi, KE"
      description={[
        "Guided a group of top performing students through the college application process helping them secure admissions to top colleges in the United States and other parts of the globe.",

      ]}
    />
   
  </section>
);

export default ExperienceTimeline;
