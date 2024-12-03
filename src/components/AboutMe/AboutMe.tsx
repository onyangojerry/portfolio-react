import React from "react";
import "./_about-me.scss";

const AboutMe: React.FC = () => (
  <section id="about" className="my-4 about-me">
    <h2>About Me</h2>
    <p>
      I'm a senior at Swarthmore College majoring in Computer Science with a
      Cognitive Science minor. I specialize in full-stack development, machine
      learning, and Artificial Intelligence, with a passion for creating
      innovative, user-focused solutions.
    </p>
    <p>
      Fascinated by the intersection of technology and creativity, my interests
      span music, film (animations), 3D development, and human-computer
      interaction. My work emphasizes AI/ML, natural language processing (NLP),
      computational linguistics, and full-stack development.
    </p>

    <p>
      I'm particularly passionate about using NLP to uncover implicit knowledge
      in large text collections and applying it to build human-centered
      applications. My goal is to enhance human-computer interactions by
      bridging the gap between machines and humans for more intuitive and
      meaningful connections.
    </p>
  </section>
);

export default AboutMe;
