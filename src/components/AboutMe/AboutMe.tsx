import React from "react";
import "./_about-me.scss";

const AboutMe: React.FC = () => (
  <section id="about" className="my-4 about-me">
    <h2>Hi there!</h2>
    <p>
      I exploit computer systems; i love side channel attacks, Deep learning, and
      real-time systems for embedded systems. Research is probably not contributing 
      to meaningful advencements, most of it is being buried into the "research paper heap! 
      Let's work on that;"
    </p>
    <p>
      C and C++ "control" memory management. Do not ship heavy code, analyze the trade-offs buddy!
    </p>
    <p>
      I also love open source, it's FREE advancements!
    </p>
    <h5>I'm interested In:</h5>
    <ul>
      <li>Full-stack development</li>
      <li>Systems</li>
      <li>Natural Language Processing and Neural Networks/ Deep Learning</li>
      <li>Fintech - FPGA</li>
      <li>Distributed systems & DevOps</li>
    </ul>
    <p>
      Computers are still low level devices that need attention. Applications are repetitive and automation has brought the abstraction.
      Machine Learning(ML) is promising, especially for managing specific memory accesses; again- repetitive memory accesses.
      ML algorithms (not to be fully trusted, though- like statistics) uncover implicit patterns that become useful for detecting CPU side channel attacks.

      
    </p>
  </section>
);

export default AboutMe;