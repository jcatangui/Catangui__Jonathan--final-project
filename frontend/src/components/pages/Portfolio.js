import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Proj_pupCalc from "../shared/image/Proj_pupCalc.png";
import Proj_recCalc from "../shared/image/Proj_recCalc.png";
// import "../pages/Portfolio.css";

const Portfolio = () => {
  return (
    <Container>
      <section id="portfolio">
        <section class="projectGrid">
          <h1>Portfolio</h1>
          <article class="project">
            Puppy Age Calculator
            <br />
            <a
              href="https://gitlab.com/jcatangui/puppy-age-calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="projImg" src={Proj_pupCalc} />
            </a>
          </article>
          <br />
          <article class="project">
            Rectangle Area Calculator
            <br />
            <a
              href="https://gitlab.com/jcatangui/rectangle-area-calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="projImg" src={Proj_recCalc} />
            </a>
          </article>
          <br />
        </section>
      </section>
    </Container>
  );
};

export default Portfolio;
