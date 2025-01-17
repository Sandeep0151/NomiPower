import CalculationIcon from "@/svg/CalculationIcon";
import EstimateCalculationIcon from "@/svg/EstimateCalculationIcon";
import ProjectIcon from "@/svg/ProjectIcon";
import React from "react";

interface propsType{
  propsClass:string;
}

const ProcessSolutionsSec = ({propsClass}:propsType) => {
  return (
    <>
      <section className={`process-solutions ${propsClass}`}>
        <div className="container">
          <div className="heading">
            <p>process and the solutions we can provide</p>
            <div className="line"></div>
            <h2>what you can expect from our sustainability consultants</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="free-consultation">
                <div className="free-consultation-number">
                  <h3>Solar EPC Services</h3>
                  <span>1</span>
                </div>
                <p>
                  Comprehensive project management from design and procurement to installation and commissioning. Whether it’s a rooftop setup or a large-scale solar farm, we deliver seamless, high-quality execution.
                </p>

              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="free-consultation mt-lg-0">
                <div className="free-consultation-number">
                  <h3>Solar Equipment Trading</h3>
                  <span>2</span>
                </div>
                <p>
                  Leveraging a global network, we provide top-tier solar panels, inverters, batteries, and more to distributors, contractors, and developers worldwide at competitive prices.
                </p>

              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="free-consultation">
                <div className="free-consultation-number">
                  <h3>Operation & Maintenance</h3>
                  <span>3</span>
                </div>
                <p>
                  Expert maintenance and monitoring services to ensure your solar system operates at peak efficiency, maximizing its lifecycle performance and value.

                </p>

              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="free-consultation mt-lg-0">
                <div className="free-consultation-number">
                  <h3>Consulting and Advisory</h3>
                  <span>4</span>
                </div>
                <p>
                 Tailored consulting services, including feasibility studies, financial analysis, and guidance on government incentives, empowering clients to make well-informed decisions.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSolutionsSec;
