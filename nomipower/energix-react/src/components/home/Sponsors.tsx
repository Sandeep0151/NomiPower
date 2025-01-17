import Image from "next/image";
import React from "react";
import sponsors1 from "../../../public/assets/img/sponsor-1.jpg";
import sponsors2 from "../../../public/assets/img/sponsor-2.jpg";
import sponsors3 from "../../../public/assets/img/sponsor-3.jpg";
import sponsors4 from "../../../public/assets/img/sponsor-4.jpg";
import sponsors5 from "../../../public/assets/img/sponsor-5.jpg";
const Sponsors = () => {
  return (
    <>
      <div className="container partners gap no-top">
        <h3>partners and sponsors</h3>
        <div className="sponsors">
          <Image alt="sponsors"  src={sponsors1} style={{ width: "auto", height: "auto" }}/>
          <Image alt="sponsors"  src={sponsors2} style={{ width: "auto", height: "auto" }}/>
          <Image alt="sponsors"  src={sponsors3} style={{ width: "auto", height: "auto" }}/>
          <Image alt="sponsors"  src={sponsors4} style={{ width: "auto", height: "auto" }}/>
          <Image alt="sponsors"  src={sponsors5} style={{ width: "auto", height: "auto" }}/>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
