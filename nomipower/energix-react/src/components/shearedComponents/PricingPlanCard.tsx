import React from "react";
import checkMark from "../../../public/assets/img/check-mark.png";
import Image from "next/image";
import { pricingPlan } from "@/interFace/interFace";
import Link from "next/link";

interface propsData {
  data: pricingPlan;
  margin: string;
}

const PricingPlanCard = ({ data, margin }: propsData) => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className={`solar-energy ${margin}`}>
          <Image alt="img" src={data?.img} style={{ width: "auto", height: "auto" }}/>
          <h3>{data?.title}</h3>
          <h2>
            <span>$</span>
            {data?.price}
            <sub>/{data?.package}</sub>
          </h2>
          <p>The perfect plan for small business</p>
          <ul>
            <li>
              <Image
                alt="img"
                src={checkMark}
                style={{ width: "auto", height: "auto" }}
              />
              Built using n-type mono
            </li>
            <li>
              <Image
                alt="img"
                src={checkMark}
                style={{ width: "auto", height: "auto" }}
              />
              Crystalline cell materials
            </li>
            <li>
              <Image
                alt="img"
                src={checkMark}
                style={{ width: "auto", height: "auto" }}
              />
              Reliability and performance
            </li>
          </ul>
          <Link href="#" className="button">
            Purchase Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default PricingPlanCard;
