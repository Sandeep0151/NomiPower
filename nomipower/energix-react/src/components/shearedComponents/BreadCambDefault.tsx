 

import React from "react";
import bgImg from "../../../public/assets/img/banner.jpg";
interface propsType {
  title: string;
  pages:string
}

const BreadCambDefault = ({ title,pages }: propsType) => {
  return (
    <>
      <section
        className="banner"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="banner-text">
            <h2>{title}</h2>
            <p>
              Practical renewable energy technology thatreduces costs and helps
              the environment
            </p>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">
                  <i className="fa-solid fa-house pe-2"></i>Home
                </a>
              </li>
              <li>{pages}</li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCambDefault;
