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
    <h2>Experience</h2>
    <ExperienceItem
      role="
      Software Engineering Intern"
      company="Google"
      duration="May 2024 - Aug 2024"
      location="Sunnyvale, CA"
      description={[
        "Integrated text and image embeddings to enhance multi-modal spam detection in Gmail.",

        "Optimized data pipelines with efficient ETL processes and caching strategies for improved performance.",

        "Developed unit tests, monitoring tools, and fault-tolerant mechanisms to ensure seamless rollout and 99.9% uptime.",

        "Gained expertise in cloud computing, data pipelining, distributed systems, and C++, Go, SQL, HTML/CSS.",
      ]}
    />
    <ExperienceItem
      role="IT Student Associate"
      company="Swarthmore College"
      duration="Sep 2023 - May 2024"
      location="Swarthmore, PA"
      description={[
        "Resolved 45+ technical support tickets weekly, managed hardware deployments, performed data migrations, and created instructional materials for technical initiatives; improved system efficiency by 25% enhancing user satisfaction.",
      ]}
    />
    <ExperienceItem
      role="Software Engineering Intern"
      company="Amiva"
      duration="May 2022 - Aug 2022"
      location="Nairobi, Kenya"
      description={[
        "Collaborated with Amiva's Engineering team to build the organization's payments infrastructure to develop and integrate backend logic with Python & Django, utilizing MySQL and RabbitMQ to enhance stability and performance.",
      ]}
    />
    <ExperienceItem
      role="iOS App Developer"
      company="Codepath.org"
      duration="Feb 2022 - May 2022"
      location="Swarthmore, PA"
      description={[
        "Learnt the fundamentals of Swift programming language and made iOS applications on Xcode.",

        "Developed a fully functioning iOS Flashcard app as part of the Codepath Intro to Mobile Design—iOS course.",

        "Graduated with Advanced Honors",
      ]}
    />
  </section>
);

export default ExperienceTimeline;
