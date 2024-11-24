import React from "react";
import { Button } from "react-bootstrap";

const ProfileDetails: React.FC = () => (
  <div className="hero-content text-left mt-5">
    <div className="profile-info">
      <h1>Badong Badong</h1>
      <h4>Full-Stack Developer | React</h4>
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
        <Button variant="primary" className="me-2">
          Download Resume
        </Button>
        <Button variant="outline-secondary">Message</Button>
      </div>
    </div>
  </div>
);

export default ProfileDetails;
