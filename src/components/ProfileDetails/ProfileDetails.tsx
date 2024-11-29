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
        Passionate developer specializing in web applications and cutting-edge
        technologies. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec lorem dolor, feugiat at egestas eu, convallis id urna. Donec ac
        dui ac ipsum laoreet convallis non sed purus. Ut porta accumsan est quis
        placerat. Aliquam scelerisque faucibus tincidunt. Duis leo quam,
        fringilla ac hendrerit a, luctus sit amet libero. Suspendisse a tortor
        eu magna convallis congue ac quis nisi. Nullam eget mi orci. Donec vel
        imperdiet mi.
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
