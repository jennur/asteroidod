import React from "react";

const About = () => {

    return(
        <main>
          <div>
              <h2>About AsteroidOD</h2>
              <div className="c-text-box c-text-box--blue">
                <p>
                  Hi there, thanks for showing interest in AsteroidOD! This site started out as a school project 
                  at <a href="https://www.noroff.no" target="_blank">Noroff</a>, and was later <a href="https://github.com/jennur/asteroidod" target="_blank">further developed</a>.
                  All asteroid details are pulled from <a href="https://api.nasa.gov/api.html#neows-feed">NASA's NEOWS</a> which is
                  updated on a daily basis.
                  <br/><br/>
                  If you want to get in touch with me to give me your feedback or anything about visiting this site, please feel free to <a href="mailto:jenbon@jennurate.com">contact me</a>! I'll be excited to hear from you.
                </p>
                <p>
                Jenny / <a href="https://www.jennurate.com">jennurate.com</a>
                </p>
              </div>
          </div>
        </main>
        );

}

export default About;