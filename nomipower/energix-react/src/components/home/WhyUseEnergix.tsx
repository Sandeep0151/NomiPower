"use client"
import React, { useState } from "react";

import TimeSaveIcon from "@/svg/TimeSaveIcon";
import SaveMoneyIcon from "@/svg/SaveMoneyIcon";
import ObligationIcon from "@/svg/ObligationIcon";
import videoIcon from "../../../public/assets/img/video.jpg";
import Image, { StaticImageData } from "next/image";
import ModalVideo from "react-modal-video";
interface propsType{
  bgImg:StaticImageData | null;
  propsClass:string;
}
const WhyUseEnergix = ({bgImg,propsClass}:propsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      <section
        className={`energix gap ${propsClass}`}
        style={{ backgroundImage: `url(${bgImg ? bgImg.src : ''})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="heading">
                <p>Worldwithout Waste</p>
                <div className="line"></div>
                <h2>Why Choose Nomi Power?</h2>
              </div>
              <div className="use-energix d-flex">
                <div className="use-energix-icon">
                  <i>
                    <TimeSaveIcon />
                  </i>
                </div>
                <div>
                  <h4>Expertise</h4>
                  <h6>
                    Years of experience delivering complex solar projects on time and within budget.
                  </h6>
                </div>
              </div>
              <div className="use-energix d-flex">
                <div className="use-energix-icon">
                  <i>
                    <SaveMoneyIcon />
                  </i>
                </div>
                <div>
                  <h4>Global Reach</h4>
                  <h6>
                    Partnerships with leading manufacturers ensure competitive pricing and premium quality.
                  </h6>
                </div>
              </div>
              <div className="use-energix d-flex">
                <div className="use-energix-icon">
                  <i>
                    <ObligationIcon />
                  </i>
                </div>
                <div>
                  <h4>Quality Assurance</h4>
                  <h6>
                    Durable systems built with top-tier, internationally recognized components.
                  </h6>
                </div>
              </div>
              <div className="use-energix d-flex">
                <div className="use-energix-icon">
                  <i>
                    <SaveMoneyIcon />
                  </i>
                </div>
                <div>
                  <h4>End-to-End Solutions</h4>
                  <h6>
                    Comprehensive services from design to maintenance for a hassle-free experience.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="video">
                <figure>
                  <Image alt="img" src={videoIcon} style={{ width: "100%", height: "auto" }}/>
                </figure>

                <button
                  onClick={() => {
                    openVideoModal();
                  }}
                  type="button"
                >
                  <i>
                    <svg
                      width="11"
                      height="17"
                      viewBox="0 0 11 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 8.49951L0.5 0.27227L0.5 16.7268L11 8.49951Z"
                        fill="white"
                      />
                    </svg>
                  </i>
                </button>
              </div>
              <div className="d-sm-flex mt-4">
                <div className="call-for">
                  <p>Call For a Quote:</p>
                  <a href="callto:+919461574475">+91 9461574475</a>
                </div>
                <div className="call-for mail-for">
                  <p>Email Address:</p>
                  <a href="mailto:info@nomipower.com">info@nomipower.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="xKxrkht7CpY"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default WhyUseEnergix;
