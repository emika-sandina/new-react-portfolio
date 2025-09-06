import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Emika Sandina. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="https://github.com/emika-sandina" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:emika.20231380@iit.ac.lk">Email</a>
          <a href="https://www.linkedin.com/in/emika-sandina-243a98336/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;