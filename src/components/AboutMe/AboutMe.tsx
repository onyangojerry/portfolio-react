import React from "react";
import "./_about-me.scss";

const AboutMe: React.FC = () => (
  <section id="about" className="my-4 about-me">
    <h2>Hi there!</h2>
    <p>🔭 I'm diving into deep learning and machine learning by building an AI chatbot using fine-tuned local LLMs, working on real-world applications and picking up key concepts along the way.</p>
    <p>🌱 In my Compilers class, I'm learning OCaml and getting hands-on with functional programming. I'm also exploring JUCE to develop audio plugins—exciting stuff!</p>
    <p>👯 I love collaborating on open source projects, especially those that involve creating interactive websites, iOS apps, or anything that puts users first. Check out my projects on GitHub!</p>
    <h5>My interests mainly lie in: </h5>
    <ul>
      <li>Full-stack (both frontend & backend) development</li>
      <li>iOS/Android development</li>
      <li>Machine Learning & Artificial Intelligence</li>
      <li>Fintech</li>
      <li>Cloud Computing & DevOps</li>
    </ul>
    <p>
      🪴 My passion lies in applying natural language processing to uncover
      implicit patterns and insights within large collections of text, enabling
      the creation of human-centered applications. My ultimate goal is to
      enhance human-computer interactions by bridging the gap between machines
      and humans, fostering intuitive and meaningful connections.
    </p>
  </section>
);

export default AboutMe;
