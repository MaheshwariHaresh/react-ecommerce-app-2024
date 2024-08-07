import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - ECommerce App"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img src="/images/about.jpeg" alt="about" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolorum excepturi omnis, earum adipisci porro eos quos consectetur
            animi beatae enim dolores eligendi ut sunt labore totam, dignissimos
            asperiores perferendis. Delectus quisquam nam eos iusto numquam nemo
            natus, voluptate alias corrupti excepturi enim assumenda? Sit,
            facilis nemo! Minima exercitationem possimus ut ea esse perferendis
            dignissimos nobis doloribus fuga earum.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
