import React, { useState } from "react"
// import { useCountUp } from "react-countup"
import { motion } from "framer-motion"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
// import ProjectsTransition from "../images/Projects-Screen-Invert.jpg"
// import KeyboardEventHandler from "react-keyboard-event-handler"
// import classNames from "classnames"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import Text from "../components/text"
// import NavHelper from "../images/nav-helper.svg"
// import { Noise } from "@react-three/postprocessing"
// import Effects from "../components/effects"
// import GradientOne from "../images/plastic1-tiny.jpg"

const MainMenuOverlay = ({ arrowPosition }) => (
  <motion.div
    key="overlay"
    className="overlay-img"
    initial={false}
    animate={{
      filter:
        arrowPosition === 1
          ? "hue-rotate(0deg)"
          : arrowPosition === 2
          ? "hue-rotate(120deg)"
          : "hue-rotate(240deg)",
    }}
    transition={{ duration: 0.8 }}
  >
    {arrowPosition === 1 ? (
      <Image src={1} />
    ) : arrowPosition === 2 ? (
      <Image src={2} />
    ) : arrowPosition === 3 ? (
      <Image src={3} />
    ) : null}
  </motion.div>
)

const MainMenuUpperLeft = ({ arrowPosition }) => {
  const title1 = "frontend"
  const title2 = "developer"
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  }
  const letter = {
    hidden: { opacity: 0, y: 50, skew: -40, rotate: 45 },
    visible: { opacity: 1, y: 0, skew: 0, rotate: 0 },
  }

  return (
    <div className="main-menu-upper-left">
      <div className="main-menu-header">
        <h1 id="main-header">
          hi! i'm brad carter, a <br />
          <motion.span
            key="frontend-developer"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            <span className="title-container">
              {title1.split("").map((char, index) => {
                return (
                  <motion.span
                    key={char + "-" + index}
                    variants={letter}
                    className="gradient-text-light"
                  >
                    {char}
                  </motion.span>
                )
              })}
            </span>{" "}
            <span className="title-container">
              {title2.split("").map((char, index) => {
                return (
                  <motion.span
                    key={char + "-" + index}
                    variants={letter}
                    className="gradient-text-light"
                  >
                    {char}
                  </motion.span>
                )
              })}
            </span>
          </motion.span>
          <br /> based in austin, tx.
        </h1>
      </div>
    </div>
  )
}

const MainMenuRight = ({ arrowPosition }) => (
  <div className="main-menu-right">
    {[...Array(9)].map((value, index) => (
      <h6 className="main-menu-right-text" key={index}>
        {arrowPosition === 1
          ? "PROJECTS"
          : arrowPosition === 2
          ? "ABOUT ME"
          : arrowPosition === 3
          ? "CONTACT"
          : null}
      </h6>
    ))}
  </div>
)

const IndexPage = () => {
  const [arrowPosition, changeArrowPosition] = useState(1)
  // const [contentLoaded, toggleContentLoaded] = useState(false)

  // useEffect(() => {
  //   toggleContentLoaded(true)
  // }, [])

  // const [loading, toggleLoading] = useState(true)
  // const { countUp } = useCountUp({
  //   end: 100,
  //   onEnd: () => toggleLoading(false),
  //   suffix: "%",
  // })

  return (
    <TransitionState>
      {({ mount, transitionStatus, entry, exit }) => (
        <Layout page="index">
          <SEO title="Home" />
          <MainMenuOverlay arrowPosition={arrowPosition} />
          <motion.div
            className="main-menu"
            key="main-wrapper"
            initial={entry.state}
            animate={
              transitionStatus === "exiting"
                ? exit.state
                : { opacity: 1, x: 0, y: 0 }
            }
            transition={
              transitionStatus === "exiting"
                ? { duration: exit.length }
                : { duration: 0.4 }
            }
          >
            <div className="main-menu-left">
              <MainMenuUpperLeft arrowPosition={arrowPosition} />
              {typeof window !== `undefined` && (
                <div className="main-menu-lower-left">
                  <motion.h3
                    layout
                    transition={{ type: "spring", bounce: 0 }}
                    className="mmo-selector"
                    id={`position-${arrowPosition}`}
                  >
                    &#62;&#62;
                  </motion.h3>
                  <TransitionLink
                    id="projects-link"
                    to="projects"
                    exit={{
                      length: 0.4,
                      state: { x: -window.innerWidth, opacity: 0 },
                    }}
                    entry={{
                      delay: 0.4,
                      state: { x: window.innerWidth },
                    }}
                  >
                    <h3
                      onMouseOver={() => changeArrowPosition(1)}
                      className={
                        arrowPosition === 1 ? "active-link" : "outline"
                      }
                    >
                      Projects
                    </h3>
                  </TransitionLink>
                  <TransitionLink
                    id="about-me-link"
                    to="about"
                    exit={{
                      length: 0.4,
                      state: { x: window.innerWidth, opacity: 0 },
                    }}
                    entry={{
                      delay: 0.4,
                      state: { x: -window.innerWidth },
                    }}
                  >
                    <h3
                      onMouseOver={() => changeArrowPosition(2)}
                      className={
                        arrowPosition === 2 ? "active-link" : "outline"
                      }
                    >
                      About me
                    </h3>
                  </TransitionLink>
                  <TransitionLink
                    id="contact-link"
                    to="contact"
                    exit={{
                      length: 0.4,
                      state: { y: -window.innerHeight, opacity: 0 },
                    }}
                    entry={{
                      delay: 0.4,
                      state: { y: window.innerHeight },
                    }}
                  >
                    <h3
                      onMouseOver={() => changeArrowPosition(3)}
                      className={
                        arrowPosition === 3 ? "active-link" : "outline"
                      }
                    >
                      Contact
                    </h3>
                  </TransitionLink>
                </div>
              )}
            </div>
            <MainMenuRight arrowPosition={arrowPosition} />
          </motion.div>
        </Layout>
      )}
    </TransitionState>
  )
}

export default IndexPage

// const handleArrowKeys = key => {
//   if (key === "down" && arrowPosition < 3) {
//     changeArrowPosition(arrowPosition + 1)
//   } else if (key === "up" && arrowPosition > 1) {
//     changeArrowPosition(arrowPosition - 1)
//   }
// }

// <KeyboardEventHandler
// handleKeys={["up", "down"]}
// handleFocusableElements = { true }
// onKeyEvent={key => handleArrowKeys(key)}
// />

// <Suspense fallback={null}>
// <Text selector={arrowPosition} />
// </Suspense>
