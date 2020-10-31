import React, { useState } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame, useThree } from "react-three-fiber"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import KeyboardEventHandler from "react-keyboard-event-handler"
import classNames from "classnames"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
// import Image from "../components/image"
import SEO from "../components/seo"

import NavHelper from "../images/nav-helper.svg"
import Plastic from "../images/plastic1-tiny.jpg"
import { PlaneBufferGeometry } from "three"

// const ImgMesh = () => {
//   const { gl, scene, camera } = useThree()
//   return (
//     <mesh>
//       <PlaneBufferGeometry />
//       <meshBasicMaterial>
//         <texture attach="map" img={Plastic} />
//       </meshBasicMaterial>
//     </mesh>
//   )
// }

const IndexPage = () => {
  const [arrowPosition, changeArrowPosition] = useState(1)

  const handleArrowKeys = key => {
    if (key === "down" && arrowPosition < 3) {
      changeArrowPosition(arrowPosition + 1)
    } else if (key === "up" && arrowPosition > 1) {
      changeArrowPosition(arrowPosition - 1)
    }
  }

  // const overlayClasses = classNames("overlay", {
  //   "overlay--one": arrowPosition === 1,
  //   "overlay--two": arrowPosition === 2,
  //   "overlay--three": arrowPosition === 3,
  // })
  const dur = 0.8
  return (
    <Layout page="index">
      {/* <motion.div className="motion-overlay" /> */}
      {arrowPosition === 1 ? (
        <motion.div
          className="overlay-1"
          animate={{ filter: "hue-rotate(0deg)" }}
          transition={{ duration: dur }}
        />
      ) : arrowPosition === 2 ? (
        <motion.div
          className="overlay-2"
          animate={{ filter: "hue-rotate(120deg)" }}
          transition={{ duration: dur }}
        />
      ) : arrowPosition === 3 ? (
        <motion.div
          className="overlay-3"
          animate={{ filter: "hue-rotate(240deg)" }}
          transition={{ duration: dur }}
        />
      ) : null}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="main-menu"
      >
        <SEO title="Home" />
        <KeyboardEventHandler
          handleKeys={["up", "down"]}
          // handleFocusableElements={true}
          onKeyEvent={key => handleArrowKeys(key)}
        />
        <div className="main-menu-left">
          <div className="main-menu-header">
            <h1 id="main-header">
              hi! i'm brad carter, a <br />
              <span className="gradient-text">frontend developer</span>
              <br /> based in austin, tx.
            </h1>
          </div>
          <div className="main-menu-options">
            <motion.div
              layout
              transition={{ type: "spring", bounce: 0 }}
              className="mmo-selector"
              id={`position-${arrowPosition}`}
            >
              &#62;&#62;
            </motion.div>
            <AniLink
              id="projects"
              cover
              to="projects"
              direction="left"
              bg="#080808"
            >
              <h3
                onMouseOver={() => changeArrowPosition(1)}
                className={
                  arrowPosition === 1 ? "active-link" : "inactive-link"
                }
              >
                Projects
              </h3>
            </AniLink>
            <AniLink
              id="about-me"
              cover
              to="about"
              direction="right"
              background="#080808"
            >
              <h3
                onMouseOver={() => changeArrowPosition(2)}
                className={
                  arrowPosition === 2 ? "active-link" : "inactive-link"
                }
              >
                About me
              </h3>
            </AniLink>
            <AniLink id="contact" fade to="contact">
              <h3
                onMouseOver={() => changeArrowPosition(3)}
                className={
                  arrowPosition === 3 ? "active-link" : "inactive-link"
                }
              >
                Contact
              </h3>
            </AniLink>
          </div>
          {/* <span id="nav-helper">
            <img
              src={NavHelper}
              alt="Use your mouse or arrow keys/enter to navigate."
            />
          </span> */}
        </div>
        <div className="main-menu-right">
          {[...Array(9)].map((value, index) => (
            <h3 className="main-menu-right-text" key={index}>
              {arrowPosition === 1
                ? "PROJECTS"
                : arrowPosition === 2
                ? "ABOUT ME"
                : arrowPosition === 3
                ? "CONTACT"
                : null}
            </h3>
          ))}
        </div>
      </motion.div>
    </Layout>
  )
}

export default IndexPage
