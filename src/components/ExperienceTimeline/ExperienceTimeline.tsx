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
      role="
      Software Engineering Intern"
      company="Google"
      duration="May 2024 - Aug 2024"
      location="Sunnyvale, CA"
      description={[
        "Modernized a multi-modal spam clustering tool by integrating text and image embeddings, enhancing accuracy and scalability.",

        "Optimized ETL pipelines, reducing processing time and ensuring 99.9% uptime with fault-tolerant backend solutions.",

        "Conducted code reviews and wrote unit tests in an agile environment to maintain high-quality deliverables.",

        "Developed expertise in cloud computing, data pipelines, distributed systems, and tools like C++, Go, SQL, and HTML/CSS.",
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

        "Graduated with Honors",
      ]}
    />
  </section>
);

export default ExperienceTimeline;
