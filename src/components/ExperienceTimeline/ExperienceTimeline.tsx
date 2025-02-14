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
      Software Developer"
      company="Pomona College"
      duration="Jan 2025 - Present"
      location="Claremont, CA"
      description={[
        "Developed a process monitoring system and deployed into dev serves to manage and mmonitor servers operating systems cutting down server management and malicious processes identification time by 70%.",

        "Implemented a server local real-time threat monitoring system which displayed logs on a dashboard for dev server management. Implemented a notification technology on the monitoring system which improved threat reaction time by 40%.",

        "Conducted code reviews and implemented unit tests in an agile environment, ensuring high-quality deliverables and seamless team collaboration.",

        "Gained expertise in system security, distributed systems.",
      ]}
    />
    <ExperienceItem
      role="Junior Systems Analyst"
      company="Pomona College"
      duration="August 2024 - Present"
      location="Swarthmore, PA"
      description={[
        "Implemented Automation ",
      ]}
    />
    <ExperienceItem
      role="IT help desk Technician"
      company="Pomona College"
      duration="August 2022 - Aug 2024"
      location="Nairobi, Kenya"
      description={[
        "Executed software upgrades and patch implementations, addressing an average of 35 IT-related tickets per week, improving system efficiency by 20%, and boosting user satisfaction in a high-demand environment.",
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

        "Graduated with Honors.",
      ]}
    />
  </section>
);

export default ExperienceTimeline;
