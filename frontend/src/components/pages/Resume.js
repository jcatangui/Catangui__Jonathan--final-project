import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
// import "../pages/Resume.css";

const Resume = () => {
  return (
    <Container>
      <section id="resume">
        <section class="resumeContainer">
          {/* --- Resume Details Seciton ---  */}
          <h1>Here is what I've done.</h1>
          <article class="empDetails">
            Automation & Software Development Manager at Total Meter Services
            <aside>August 2013 to Present</aside>
          </article>
          <article class="empDetails">
            Support & Implementation Consultant at Total Meter Services
            <aside>April 2017 to August 2013</aside>
          </article>
          <article class="empDetails">
            Bachelor of Technology in Electronics Engineering Technology
            <br />
            RCC Institute of Technology
            <aside>September 2004 to April 2007</aside>
          </article>
        </section>
      </section>
    </Container>
  );
};

export default Resume;
