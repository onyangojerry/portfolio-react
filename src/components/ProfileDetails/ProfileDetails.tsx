import React from "react";
import { Button } from "react-bootstrap";
import ReactGA from "react-ga4";
import "/src/components/ProfileDetails/_profile-details.scss";

const ProfileDetails: React.FC = () => {
  // Event handlers for Google Analytics
  const handleDownloadResume = () => {
    ReactGA.event({
      category: "Resume",
      action: "Downloaded Resume",
      label: "Download Resume Button",
    });
  };

  const handleMessageMe = () => {
    ReactGA.event({
      category: "Contact",
      action: "Clicked Message Me",
      label: "Message Me Button",
    });
  };

  return (
    <div className="hero-content text-left">
      <div className="profile-info">
        <h1>Branley Mmasi</h1>
        <h4>
          {" "}
          Computer Science major with a Cognitive Science minor | Swarthmore
          College{" "}
        </h4>
        <div className="hero-buttons mt-3">
          <Button
            variant="primary"
            href="https://drive.google.com/drive/folders/1tgKnePQpHcQNuCEtSm_M-xlfmLuAf139?usp=sharing"
            target="_blank" /* Opens in new tab */
            rel="noopener noreferrer"
            onClick={handleDownloadResume}
          >
            {" "}
            Download Resume
          </Button>
          <Button
            variant="outline-secondary"
            href="mailto:mmasi.branley@gmail.com?subject=Hello Bmmasi!&body=Hi, I visited your website and would like to get in touch!"
            target="_blank"
            onClick={handleMessageMe}
          >
            Message Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
