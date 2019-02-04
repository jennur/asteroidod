import React from "react";
import TextBox from "../components/TextBox";

const About = () => {

    return(
        <main>
          <div>
              <h2>About AsteroidOD</h2>
              <TextBox color="blue">
                  Hi there, thanks for showing interest in AsteroidOD! This site started out as a school project 
                  at <a href="https://www.noroff.no" target="_blank">Noroff</a>, and was later <a href="https://github.com/jennur/asteroidod" target="_blank">further developed</a>.
                  All asteroid details are pulled from <a href="https://api.nasa.gov/api.html#neows-feed" target="_blank">NASA's NEOWS</a> which is
                  updated on a daily basis.
                  <br/><br/>
                  If you want to get in touch with me to give me your feedback or really anything about this site, please feel free to <a href="/contact">contact me</a>! I'll be excited to hear from you.
                  <p>
                  Jenny / <a href="https://www.jennurate.com" target="_blank">jennurate.com</a>
                  </p>
              </TextBox>
          </div>
        </main>
        );

}

export default About;