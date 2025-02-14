import React from "react";
import "/src/components/Footer/_footer.scss";

const Footer: React.FC = () => (
  <footer className="footer">
    <p>
      &copy; {new Date().getFullYear()} Jerry Onyango | Connect on{" "}
      <a href="https://www.linkedin.com/in/jerry-rawlings-onyango/.">LinkedIn</a> or{" "}
      <a href="https://https://github.com/onyangojerry">GitHub</a>.
    </p>
  </footer>
);

export default Footer;
