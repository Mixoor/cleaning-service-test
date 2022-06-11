import { Link } from "react-router-dom";
import Fb from "../../assets/svg/fb.svg";
import Google from "../../assets/svg/google.svg";
import Instagram from "../../assets/svg/instagram.svg";

const social = [Fb, Google, Instagram];

const quickLinks = {
  title: "Quick Links",
  links: [
    {
      title: "Price List of Services",
      link: "/price-list",
    },
    {
      title: "About A1",
      link: "/price-list",
    },
    {
      title: "Cleaning in Tunisia",
      link: "/price-list",
    },
    {
      title: "Home Cleaning",
      link: "/price-list",
    },
    {
      title: "Office Cleaning",
      link: "/price-list",
    },
    {
      title: "Book the Cleaning online",
      link: "/price-list",
    },
  ],
};

const serviceCleaning = {
  title: "Cleaning Services",
  links: [
    {
      title: "General Home Cleaning",
      link: "#",
    },
    {
      title: "offices Cleaning",
      link: "#",
    },
    {
      title: "Industrial Cleaning",
      link: "#",
    },
    {
      title: "Post-Construction",
      link: "#",
    },
    {
      title: "Cleaning",
      link: "#",
    },
    {
      title: "Moving Cleaing",
      link: "#",
    },
  ],
};

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-top">
        <h2>Generate innovation but be transparent</h2>
        <p>
          Do you need a quality office cleaning or home cleaning once a week ?
          Or just one proper general cleaning? Whatever you need Tunisia -
          Cleaning services will adapt exactly to your needs
        </p>
        <button className="btn estamition-btn">Book Now</button>
      </div>

      <div className="footer-bottom">
        <div className="footer-description">
          <Link to="/">LA</Link>
          <p>
            Professional cleaning services in Tunisia,you can also found us
            here:
          </p>
          <div className="social-links">
            {social.map((item, index) => {
              return (
                <span key={`social-${index}`}>
                  <img src={item} alt="icon" />
                </span>
              );
            })}
          </div>
          <span>2022 Copyright LA</span>
        </div>
        <div className="footer-links">
          <div className="footer-links-item">
            <h3>Quick Links</h3>
            {quickLinks.links.map((item, index) => (
              <span key={"quick-link-" + index}>{item.title}</span>
            ))}
          </div>
          <div className="footer-links-item">
            <h3>Cleaning Services</h3>
            {serviceCleaning.links.map((item, index) => (
              <span key={"service-cleaning-" + index}>{item.title}</span>
            ))}
          </div>
          <div className="footer-links-item">
            <h3>Contact Us</h3>
            <span>Opening hours:</span>
            <span>Cleaning 7 days per week</span>
            <span>08:00 AM - 06:30 PM</span>
            <div className="info">
              <span>info@contact.com</span>
              <span>+216 44 22 88 66 </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-banner">
        <span>
          2022 Cleaning compayn Tunisia | Cleaning Tunisia | GDPR | GDPR and
          cookie consent
        </span>
      </div>
    </footer>
  );
};

export default Footer;
