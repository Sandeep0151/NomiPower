"use client"
import ContactForm from "@/forms/ContactForm";
import EmailIcon from "@/svg/EmailIcon";
import LocationIcon from "@/svg/LocationIcon";
import PhoneIcon from "@/svg/PhoneIcon";
import React from "react";

const ContactArea = () => {

  return (
    <>
      <section className="gap section-contact">
        <div className="container">
          <div className="heading">
            <p>Request A Quote</p>
            <div className="line"></div>
            <h2>talk about how we can help you reduce your energy</h2>
          </div>
          <div className="row">
            <div className="col-lg-8">
               <ContactForm/>
            </div>
            <div className="col-lg-4">
              <div className="contact-information">
                <h3>contact information</h3>
              </div>
              <div className="contact-info contact-information">
                <div>
                  <i>
                     <PhoneIcon/>
                  </i>
                </div>
                <div>
                  <h4>Phone No:</h4>
                  <a href="callto:+919461574475">
                    <p>+91 9461574475</p>
                  </a>
                  <a href="callto:+919784233344">
                    <p>+91 9784233344</p>
                  </a>
                </div>
              </div>
              <div className="contact-info contact-information">
                <div>
                  <i>
                     <LocationIcon/>
                  </i>
                </div>
                <div>
                  <p>E602, Arjun 226, New Vavol, Gandhinagar, Gujrat, 382016</p>
                </div>
              </div>
              <div className="contact-info contact-information">
                <div>
                  <i>
                     <EmailIcon/>
                  </i>
                </div>
                <div>
                  <h4>Email Address:</h4>
                  <a href="mailto:info@nomipower.com">
                    <p>info@nomipower.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
