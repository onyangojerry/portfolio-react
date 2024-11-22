import React from "react";

const Footer: React.FC = () => (
  <footer className="text-center py-3 mt-4 bg-light">
    <p>
      &copy; {new Date().getFullYear()} Badong Badong | Connect on{" "}
      <a href="https://linkedin.com">LinkedIn</a> or{" "}
      <a href="https://github.com">GitHub</a>.
    </p>
  </footer>
);

export default Footer;
