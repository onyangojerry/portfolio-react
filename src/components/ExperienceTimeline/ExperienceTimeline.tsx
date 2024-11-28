import React from "react";
import "./_experience-timeline.scss";

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
  <div className="experience-item">
    <h4>{role}</h4>
    <h5>{company}</h5>
    <p>
      <em>{duration}</em>
    </p>
    <p>{description}</p>
  </div>
);

const ExperienceTimeline: React.FC = () => (
  <section id="experience" className="my-4 experience-timeline">
    <h2>Experience</h2>
    <ExperienceItem
      role="Frontend Developer"
      company="TechCorp"
      duration="Jan 2020 - Dec 2022"
      description="Developed modern UI components using React and integrated them with backend APIs.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem
      dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum
      laoreet convallis non sed purus. Ut porta accumsan est quis placerat.
      Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac
      hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna
      convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imp Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem
      dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum
      laoreet convallis non sed purus. Ut porta accumsan est quis placerat.
      Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac
      hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna
      convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet
      mi.erdiet
      mi."
    />
    <ExperienceItem
      role="Software Engineer"
      company="InnovateSoft"
      duration="Jan 2018 - Dec 2019"
      description="Worked on full-stack solutions, optimizing application performance and scalability. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem
      dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum
      laoreet convallis non sed purus. Ut porta accumsan est quis placerat.
      Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac
      hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna
      convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet
      mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem
      dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum
      laoreet convallis non sed purus. Ut porta accumsan est quis placerat.
      Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac
      hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna
      convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet
      mi."
    />
  </section>
);

export default ExperienceTimeline;
