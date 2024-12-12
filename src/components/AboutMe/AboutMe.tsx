import React from "react";
import "./_about-me.scss";

const AboutMe: React.FC = () => (
  <section id="about" className="my-4 about-me">
    <h2>About Me</h2>
    <h5>📚 Interests:</h5>
    <ul>
      <li>Full-stack (Frontend or Backend) development</li>
      <li>iOS/Android development</li>
      <li>Machine Learning & Artificial Intelligence</li>
      <li>Fintech</li>
      <li>Cloud Computing & DevOps</li>
      <li>Human-Computer Interaction (HCI)</li>
      <li>Robotics (No projects yet, but greatly piques my interest)</li>
      <li>IoT (No projects yet, but greatly piques my interest)</li>
    </ul>
    <p>🖥️ Portfolio: https://bmmasi.com </p>
    <p>
      🪴 I'm currently learning deep learning and machine learning techniques,
      including fine-tuning local LLMs to align them with specific goals, or
      generating Spotify playlists based on user prompts or mood.
    </p>
    <p>
      🪴 My passion lies in applying natural language processing to uncover
      implicit patterns and insights within large collections of text, enabling
      the creation of human-centered applications. My ultimate goal is to
      enhance human-computer interactions by bridging the gap between machines
      and humans, fostering intuitive and meaningful connections.
    </p>
    <h5>🚀 Collaboration:</h5>
    <p>
      Check out my projects on GitHub (username: branley1) and let's create
      something impactful!
    </p>
  </section>
);

export default AboutMe;
