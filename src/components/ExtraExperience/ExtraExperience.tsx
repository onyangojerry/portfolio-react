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
  <section id="experience" className="my-4 experience-timeline">
    <h2>Extracurricular Experience</h2>
    <ExperienceItem
      role="
      Swarthmore College Fellow 2024"
      company="University Innovation Fellows"
      duration="Jul 2023 - Jun 2024"
      location="Swarthmore, PA"
      description={[
        "Worked with peers, faculty and administrators to create new learning opportunities for students to engage with innovation, entrepreneurship, design thinking and creativity.",

        "Researched methods to foster enhanced collaboration among student organizations at the Black Cultural Center and across the broader campus community.",

        "Developed strategic initiatives and project proposals to facilitate the recommended improvements and promote greater interconnectivity.",

        "Presented research findings and proposals to college leadership and the UIF conference in Twente, Netherlands in April 2024.",
      ]}
    />
    <ExperienceItem
      role="Resident Assistant"
      company="Swarthmore College"
      duration="Jul 2022 - Feb 2024"
      location="Swarthmore, PA"
      description={[
        "Maintained the health, safety, and welfare of Dana & Wharton CD Hall residents at Swarthmore College by organizing hall events to address academic, social and personal interests of residents.",

        "Served as a liaison between College administration and students, and as an advisor, activity coordinator, and facilitator during college functions and at the dorm level.",

        "Developed and demonstrated ethical leadership and professional skills by assessing situations and confidentially counsel students to help resolve conflicts and/or concerns",

        "Directly supervised 30+ residents each semester.",
      ]}
    />
    <ExperienceItem
      role="Multicultural Recruitment Intern"
      company="Swarthmore College"
      duration="Oct 2021 - Oct 2024"
      location="Swarthmore, PA"
      description={[
        "Collaborated with Amiva's Engineering team to build the organization's payments infrastructure to develop and integrate backend logic with Python & Django, utilizing MySQL and RabbitMQ to enhance stability and performance.",

        "Worked closely with the Admissions Office Access Team at Swarthmore College on the recruitment of traditionally marginalized populations, including students of color, first generation to college, low-income, rural students, and many other populations.",

        "Built relationships with affinity and identity groups around campus to assist in communicating their stories to the Admissions Office, and communicate how student groups can assist in recruiting a diverse class.",

        "Assisted in recruiting student hosts, event student workers, tour guides, and other front-facing student representatives.",

        "Helped facilitate the Admissions Office recruitment (Discover Swarthmore) and yield events (Swatlight/Swatstruck).",

        "Worked on individual research projects.",
      ]}
    />
    <ExperienceItem
      role="Student Admissions' Tour Guide"
      company="Swarthmore College"
      location="Swarthmore, PA"
      duration="May 2023 - Aug 2023"
      description={[
        "Maintained detailed tour schedules and managed groups of up to 30 visitors, ensuring timely tour starts.",

        "Conducted in-depth research on the college's history, academic offerings, student organizations, and campus facilities to evaluate and bolster resource availability to promote inclusivity and leadership throughout all campus communities.",

        "Delivered informative and engaging campus tours for over 200 prospective students and families per month.",
      ]}
    />
    <ExperienceItem
      role="Game Day Operator"
      company="Swarthmore College"
      location="Swarthmore, PA"
      duration="Oct 2021 - May 2022"
      description={[
        "Maintained detailed tour schedules and managed groups of up to 30 visitors, ensuring timely tour starts.",

        "Conducted in-depth research on the college's history, academic offerings, student organizations, and campus facilities to evaluate and bolster resource availability to promote inclusivity and leadership throughout all campus communities.",

        "Delivered informative and engaging campus tours for over 200 prospective students and families per month.",
      ]}
    />
    <ExperienceItem
      role="Academic Tutor"
      company="Amiva"
      location="Nairobi, Kenya"
      duration="Mar 2022 - Nov 2022"
      description={[
        "Served as an academic tutor to high school students in Kenya applying to US universities and colleges.",

        "Mentored students through essay writing, helping them practice for aptitude tests and creating a comprehensive college application.",
      ]}
    />
  </section>
);

export default ExperienceTimeline;
