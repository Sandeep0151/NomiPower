import React from "react";
import bgImg from "../../../public/assets/img/footer.jpg";
import LogoIcon from "@/svg/LogoIcon";
import Nomilogo from "@/svg/NomiLogo";
import Link from "next/link";
import PhoneIcon from "@/svg/PhoneIcon";
import LocationIcon from "@/svg/LocationIcon";
import EmailIcon from "@/svg/EmailIcon";
const FooterOne = () => {
  return (
    <>
      <footer
        className="gap no-bottom one"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="logo">
                <Link href="/">
                  <Nomilogo />
                </Link>
                <ul className="d-flex social-media">
                  <li>
                    <Link href="https://www.facebook.com/">
                      <i className="fa-brands fa-facebook"></i>facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/">
                      <i className="fa-brands fa-twitter"></i>Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/">
                      <i className="fa-brands fa-instagram"></i>instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-energix">
                <h5>Our Mission</h5>
                <p>
                  To drive the global transition to renewable energy by delivering efficient, reliable, and cost-effective solar solutions. Through innovation and a customer-first approach, we aim to reduce carbon footprints while enabling long-term energy savings for our clients.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-energix">
                <h5>Subscribe to our newsletter.</h5>
                <p>Subscribe email and get recent news and updates</p>
                <form>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email address..."
                  />
                  <button className="button">
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row contact-footer">
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div>
                  <i>
                    <PhoneIcon />
                  </i>
                </div>
                <div>
                  <h4>Phone No:</h4>
                  <Link href="callto:+919461574475">
                    <p>+91 9461574475</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div>
                  <i>
                    <LocationIcon />
                  </i>
                </div>
                <div>
                  <p>E602, Arjun 226, New Vavol, Gandhinagar, Gujrat, 382016</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info mb-0">
                <div>
                  <i>
                    <EmailIcon />
                  </i>
                </div>
                <div>
                  <h4>Email Address:</h4>
                  <Link href="mailto:info@nomipower.com">
                    <p>info@nomipower.com</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Ⓒ Copyright NomiPower Pvt. Ltd. All Right Reserved.</p>
            <ul>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
