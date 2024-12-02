import React from "react";
import { Button } from "react-bootstrap";
import "/src/components/ProfileDetails/_profile-details.scss";

const ProfileDetails: React.FC = () => (
  <div className="hero-content text-left">
    <div className="profile-info">
      <h1>Branley Mmasi</h1>
      <h4>
        {" "}
        Computer Science major with a Cognitive Science minor | Full-Stack
        Developer{" "}
      </h4>
      <p>
        I'm a rising senior at Swarthmore College and as a Computer Science
        major with a Cognitive Science minor, my interests span AI/ML, NLP,
        computational linguistics, and full-stack development.
      </p>
      <p>
        I intend to use natural language processing to identify knowledge
        implicit in large collections of text and apply this knowledge to build
        innovative applications. This way, I want to finesse human-computer
        interactions and create a proper understanding between machines and
        humans.
      </p>
      <div className="hero-buttons mt-3">
        <Button
          variant="primary"
          className=""
          href="https://drive.google.com/drive/folders/1tgKnePQpHcQNuCEtSm_M-xlfmLuAf139?usp=sharing"
          target="_blank" /* Opens in new tab */
          rel="noopener noreferrer"
        >
          {" "}
          Download Resume
        </Button>
        <Button
          variant="outline-secondary"
          href="mailto:barneybranley@gmail.com?subject=Hello&body=Hi, I visited your website and would like to get in touch!"
          target="_blank"
        >
          Message Me
        </Button>
      </div>
    </div>
  </div>
);

export default ProfileDetails;
