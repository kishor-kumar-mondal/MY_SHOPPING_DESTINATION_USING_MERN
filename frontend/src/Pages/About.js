import React from "react";
import Layout from "../Components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/ab.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Hi I am KISHOR KUMAR MONDAL. Welcome To My Shop.
            Anything You Need,get that from here. Enjoy Shoping...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;