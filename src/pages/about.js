import React, { useState } from "react"
import { motion } from "framer-motion"
// import { Transition } from "react-transition-group"
// import { useInView } from "react-intersection-observer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
// import Button from "../components/button"
// import CameramanBrad from "../images/cameraman_brad_colorized_5.png"
// import StandingBrad from "../images/standing_brad_colorized.png"
import Brad from "../images/brad-and-tree.jpg"

const AboutPage = ({ transitionStatus, entry }) => {
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
    "Adobe XD",
    "Figma",
    "Photoshop",
    "Illustrator",
    "Premiere Pro",
    "Pro Tools",
    "Reason",
  ]

  return (
    <Layout page="about">
      <SEO title="about" />
      {typeof window !== `undefined` && (
        <motion.div
          initial={entry.state}
          animate={
            transitionStatus === "exiting"
              ? { x: -window.innerWidth }
              : { x: 0 }
          }
          transition={{ duration: 0.4 }}
          className="about-page"
        >
          <div
            className="scroll-wrapper"
            style={
              transitionStatus === "entered"
                ? { overflowY: "auto" }
                : { overflowY: "hidden" }
            }
          >
            <div className="about-page">
              <div className="about-page-left">
                <Image src={8} />
                {/* <img src={Brad} alt="Brad and a tree" id="about-me-img" /> */}
              </div>
              <div className="about-page-upper-right">
                <h2 id="about-header">about me</h2>
                {/* <h4 id="about-subheader">placeholder text</h4> */}
                <div className="about-page-right-paragraph">
                  <p>
                    Frontend developer with a degree in Audio Engineering. Enjoy
                    creative problem-solving and learning whatever I can to
                    expand my skills as both a programmer and designer. Hobbies
                    include making{" "}
                    <a
                      href="https://soundcloud.com/big_jackson/love-with-you"
                      target="_blank"
                      rel="noreferrer"
                      id="content-link"
                    >
                      music
                    </a>{" "}
                    and editing{" "}
                    <a
                      href="https://youtu.be/ixmAj0pYI9o"
                      target="_blank"
                      rel="noreferrer"
                      id="content-link"
                    >
                      videos
                    </a>
                    .
                  </p>
                  {/* <hr id="about-hr" /> */}
                </div>
              </div>
              {/* <div className="overlay--about-2" /> */}
              <hr className="about-page-middle-right" />
              {/* <div className="skills-paragraph">
            <p className="skills-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Fringilla phasellus faucibus scelerisque eleifend donec pretium
              vulputate.
            </p>
          </div> */}
              <div className="about-page-lower-right">
                <div className="technologies-list">
                  <div className="tech-list-wrapper">
                    <h4 id="technologies-header">TECHNOLOGY</h4>
                  </div>
                  <div className="technologies-content">
                    {technologies.map((tech, index) => (
                      <h5 key={index} className="technology-text">
                        {tech}
                      </h5>
                    ))}
                  </div>
                </div>
                <div className="software-list">
                  <div className="soft-list-wrapper">
                    <h4 id="software-header">
                      <span id="space-filler">T</span>SOFTWARE
                      <span id="space-filler">Y</span>
                    </h4>
                  </div>
                  <div className="software-content">
                    {software.map((soft, index) => (
                      <h5 key={index} className="technology-text">
                        {soft}
                      </h5>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </Layout>
  )
}

export default AboutPage
