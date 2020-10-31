import React, { useState } from "react"
// import { Transition } from "react-transition-group"
import { useInView } from "react-intersection-observer"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/button"
import CameramanBrad from "../images/cameraman_brad_colorized_5.png"
import StandingBrad from "../images/standing_brad_colorized.png"

const AboutPage = () => {
  const technologies = [
    "JavaScript",
    "React",
    "Gatsby",
    "Material UI",
    "Bootstrap",
    "CSS/SCSS",
    "Ruby on Rails",
  ]
  const software = [
    "Photoshop",
    "Illustrator",
    "Premiere Pro",
    "Pro Tools",
    "Reason",
  ]

  return (
    <Layout>
      <SEO title="about" />
      <div className="scroll-wrapper">
        <div className="about-page">
          {/* <div className="overlay--about" /> */}
          <div className="about-page-left">
            <img src={StandingBrad} alt="Cameraman Brad" id="about-me-img" />
          </div>
          <div className="about-page-right">
            <h2 id="about-header">about me</h2>
            {/* <h4 id="about-subheader">placeholder text</h4> */}
            <div className="about-page-right-paragraph">
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Fringilla phasellus faucibus scelerisque eleifend donec pretium
                vulputate.
              </p>
              {/* <hr id="about-hr" /> */}
            </div>
          </div>
          {/* <div className="overlay--about-2" /> */}
          <div id="test">hello world.</div>
          {/* <div className="skills-paragraph">
            <p className="skills-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Fringilla phasellus faucibus scelerisque eleifend donec pretium
              vulputate.
            </p>
          </div> */}
          <div className="technologies-list">
            <span className="tech-list-wrapper">
              <h2 id="technologies-header">TECHNOLOGIES</h2>
            </span>
            {technologies.map((tech, index) => (
              <h3 className="technology-text" id={"tech-" + index}>
                {tech}
              </h3>
            ))}
          </div>
          <div className="software-list">
            <span className="soft-list-wrapper">
              <h2 id="software-header">SOFTWARE</h2>
            </span>
            {software.map((soft, index) => (
              <h3 className="technology-text" id={"soft-" + index}>
                {soft}
              </h3>
            ))}
          </div>
          <div className="about-page-lower-right">
            {/* <Button label="PROJECTS" /> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
