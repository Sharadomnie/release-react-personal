import React from "react";

const About = (props) => {
  return (
    <div>
      <h1>About</h1>
      <p>
        This site is to mainatin the contact details
        <span className="text-secondary">
          version:{props.match.params.version}
        </span>
      </p>
    </div>
  );
};

export default About;
