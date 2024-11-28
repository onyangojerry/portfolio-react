import React from "react";
import "/src/components/Footer/_footer.scss";

const Footer: React.FC = () => (
  <footer className="footer">
    <p>
      &copy; {new Date().getFullYear()} Badong Badong | Connect on{" "}
      <a href="https://linkedin.com/in/bmmasi1">LinkedIn</a> or{" "}
      <a href="https://github.com/branley1">GitHub</a>.
    </p>
  </footer>
);

export default Footer;
